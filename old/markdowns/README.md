# ATLBit.dev

- [all](https://drive.google.com/drive/folders/1tNOV2YR3n0NcJ6AWBswI-xU6bJq-8Caq?usp=drive_link)
- [content/uploads](https://drive.google.com/file/d/12XvvWEKlP3_g5lYz6ztsEx7TGpivB3BB/view?usp=drive_link)
- [wp-json/oembed/1.0](https://drive.google.com/file/d/1FX6dxSx0qvhSVyvGib3zYJGIt3HksoZb/view?usp=drive_link)


## How to Use
1. Clone repo
2. Run `bash scraper.sh <website.com>` replacing `website.com` with your domain
3. Determine html files to convert to md and move them into same dir as `converter.py`
4. Run `python -m venv .env && source .env/bin/activate`
5. Run `pip install -r requirements.txt`
6. Run `python converter.py`