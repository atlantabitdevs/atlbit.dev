import os
import re

dates = {
    "Topics for Socratic Seminar #2":"2021-11-20",
    "Topics for Socratic Seminar #3":"2022-01-20",
    "Topics for Socratic Seminar #4":"2022-02-20",
    "Bitcoin Socratic Seminar #5":"2022-03-23",
    "Bitcoin Socratic Seminar #6":"2022-04-27",
    "Bitcoin Socratic Seminar #7":"2022-06-01",
    "Bitcoin Socratic Seminar #8":"2022-06-29",
    "Bitcoin Socratic Seminar #9":"2022-07-27",
    "Bitcoin Socratic Seminar #10":"2022-08-31",
    "Bitcoin Socratic Seminar #11":"2022-09-28",
    "Bitcoin Socratic Seminar #12":"2022-10-12",
    "Bitcoin Socratic Seminar #13":"2022-11-30",
    "Bitcoin Socratic Seminar #14":"2023-01-25",
    "Bitcoin Socratic Seminar #15":"2023-02-22",
    "Bitcoin Socratic Seminar #16":"2023-03-29",
    "Bitcoin Socratic Seminar #17":"2023-04-19",
    "Bitcoin Socratic Seminar #18":"2023-05-31",
    "Bitcoin Socratic Seminar #19":"2023-06-28",
    "Bitcoin Socratic Seminar #20":"2023-07-19",
    "Bitcoin’s Birthday: a History & Deep Dive of the Genesis Block":"2023-01-04",
    "Bitcoin Lightning Privacy: Routing Analysis":"2023-01-18",
    "What should we read in 2022?":"9999-99-99",
    "Diving into tbDEX":"2022-02-15",
    "Notes for the BIP-119 Reading Group":"2022-01-25",
    "Are open source AI models the future?":"2023-07-05",
    "Cypherpunk Manifesto":"2023-03-08",
    "Utreexo":"2023-04-05",
    "Nostr: a protocol for a censorship-resistant social network":"2023-01-11",
}

dir = f'{os.path.abspath(".")}'
markdowns = os.listdir(f'{dir}/markdowns')

def build_header(split_text):
    header_title = split_text[1]
    header_date = dates[header_title]
    # if header_title.find('Socratic') != -1:
    header_type = 'Doc'
    # else:
    #     header_type = 'Post'

    header = f'''---
date: "{header_date}"
title: "{header_title}"
type: {header_type}
---
'''
    return header, header_date, header_title

def simplify(markdowns):
    for markdown in markdowns:
        md_file = f'{dir}/markdowns/{markdown}'

        with open(md_file, 'r') as f:
            text = f.read()
            split_text = re.split(r"(#{1}\s)(.*)", text)
            split_text = split_text[1:-15]
            header, date, title = build_header(split_text)
            split_text.insert(0, header)
            joined_text = "".join(split_text)

        joined_text = joined_text.replace('<', "{'<'}")
        joined_text = joined_text.replace('>', "{'>'}")

        title = re.sub(r'[^A-Za-z0-9\s]+', '', title)
        title = title.replace(' ', '_').lower()

        new_file = f'{dir}/simple-md/{date}-{title}.md'
        # new_file = f'{dir}/simple-md/{date}.md'
        with open(new_file, 'w') as new_file:
            new_file.write(joined_text)
            new_file.close

markdowns.remove('README.md')
simplify(markdowns)