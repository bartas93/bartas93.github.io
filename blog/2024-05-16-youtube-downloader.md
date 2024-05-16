---
slug: python-youtube-downloader
title: Free YouTube Playlist Downloader to mp3 or mp4 - No Ads, No Hassle
authors: bjab
tags: [python, scripts, tools]
---
# Youtube to mp4 and Youtube to mp3 via python script
I recently stopped using Spotify Premium and it has become more difficult to listen to music and podcasts on the plane. So far, I have downloaded mp3 and mp4 using online tools such as:

- https://notube.net/pl/youtube-app-v103
- https://y2down.cc/pl/youtube-mp4.html and others

Unfortunately, tools of this type allow you to download individual videos and bombard us with a lot of invasive advertisements. To avoid these problems, we will write a script in Python which, after providing a link to a playlist or movie, will download an mp3 or mp4.

We will use the library [pytube](https://pytube.io/en/latest/) to write the script .

You can find the entire script in the repository gitlab: https://gitlab.com/bart_as93/youtube-downloader

### 1. Initial setup

Clone the repository to your local machine:

```bash
git clone https://gitlab.com/bart_as93/youtube-downloader.git
cd youtube-downloader
```

Check python versions

```bash
python --version
```

In my case `Python 3.11.4`

Then we install the dependencies

```bash
pip install -r requirements.txt
```

Then we run the script, e.g.:

```bash
python .\[downloader.py](http://downloader.py/) -u https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d music -f mp4
```

The script takes 4 arguments:

- `-f` - format one of: mp3 or mp4
- `-d` - directory where to download files
- and one of below:
    - `-u` - Url to youtube video
    - `-pu` - Url to playlist

### YouTube to mp4

To download a YouTube video you need to use the `-u <link_to_video>` flag and `f mp4` flag

```bash
python .\[downloader.py](http://downloader.py/) -u https://www.youtube.com/watch?v=a59gmGkq_pw -d movies -f mp4
```

### YouTube to mp3

To download audio from YouTube video you need to use the `-u <link_to_video>` flag and `-f mp3` flag.

```bash
python .\[downloader.py](http://downloader.py/) -u https://www.youtube.com/watch?v=a59gmGkq_pw -d music -f mp3
```

### YouTube Playlist to mp4

To download videos from YouTube playlist you need to use `-pu <link_to_playlist>` flag and `-f mp4` flag.

```bash
python .\[downloader.py](http://downloader.py/) -pu https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d music-f mp4
```

### YouTube Playlist to mp3

To download audio from YouTube playlist you need to use `-pu <link_to_playlist>` flag and `-f mp3` flag.

```bash
python .\[downloader.py](http://downloader.py/) -pu https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d movies -f mp3
```

## Code overview (comments in code):

```python
import argparse
import os
from pytube import Playlist
from pytube import YouTube

# The program supports two formats: mp3 and mp4. In the else section, if the format is different, the program is disabled
def downloadByVideo(vid):
    print('downloading : {} - {} with url : {}'.format(video.author, video.title, video.watch_url))
    global type
    vidFileName = vid.author + " - " + vid.title + "." + format
    if format == 'mp3':
        type = 'audio'
# On the video object, we refer to streams, filter only audio and call the download method with options describing the target directory in which the file will be saved and the file name
        vid.streams. \
            filter(only_audio=True).desc().first(). \
            download(output_path=DOWNLOAD_DIR, filename=vidFileName)
    elif format == 'mp4':
        type = 'video'
# On the video object, we refer to streams, filter only the video, sort from the highest resolution and call the download method with options describing the target directory in which the file will be saved and the file name
        vid.streams. \
            filter(type=type, progressive=True, file_extension=format). \
            order_by('resolution'). \
            desc(). \
            first(). \
            download(output_path=DOWNLOAD_DIR, filename=vidFileName)
    else:
        print(f"Not supported format type: {format}")
        exit()

# Handling command line parameters and checking required fields
parser = argparse.ArgumentParser()

parser.add_argument("-u", "--Url", help="Youtube video url")
parser.add_argument("-pu", "--PlayListUrl", help="Playlist url")
parser.add_argument("-f", "--Format", help="Format of downloaded files - mp3 or mp4")
parser.add_argument("-d", "--Destination", help="Destination folder of downloaded files")

format="mp3"

args = parser.parse_args()

if not args.Url and not args.PlayListUrl:
    print("Please provide youtube playlist url via -pu or --PlayListUrl argument param or Youtube video url via -u or --Url")
    exit()
if not args.Destination:
    print("Please provide destination folder name via -d or --Destination argument param")
    exit()
if not args.Format:
    print("Format (-f or --Format not provided - default set to mp3")
else:
    format=args.Format

DOWNLOAD_DIR = os.getcwd() + "\\out\\" + args.Destination

# We check whether the URL to the Playlist (-pu) or the URL to the movie (-u) has been entered and the movie or playlist is downloaded based on the URL
if(args.PlayListUrl):
    playlist = Playlist(args.PlayListUrl)
    print (f"Downloading {len(playlist.videos)} files from playlist with url: {args.Url}, with format: {args.Format}, to dir: {DOWNLOAD_DIR}")

    for video in playlist.videos:
        downloadByVideo(video)

if (args.Url):
    video = YouTube(args.Url)
    downloadByVideo(video)
```