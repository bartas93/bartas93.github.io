---
slug: python-youtube-downloader
title: Ściągaj Playlisty z YouTube bez reklam za darmo - za pomocą prostego skryptu
authors: bjab
tags: [python, scripts, tools]
---
# Ściągaj Playlisty z YouTube bez reklam za darmo - za pomocą prostego skryptu
Ostatnio zrezygnowałem z Spotify Premium i słuchanie muzyki oraz podcastów w samolocie stało się trudniejsze. Do tej pory ściągałem mp3 i mp4 za pomocą narzędzi online typu:

- https://notube.net/pl/youtube-app-v103
- https://y2down.cc/pl/youtube-mp4.html i inne

Niestety narzędzia tego typu pozwalają na ściąganie pojedynczych filmów i zarzucają nas masą inwazyjnych reklam. Aby ominąć te problemy, napiszemy skrypt w języku python, który po podaniu linku do playlisty lub filmu ściągnie nam mp3 lub mp4.

Do napisania skryptu użyjemy bibliotekę [pytube](https://pytube.io/en/latest/).

Cały skrypt możecie znaleźć w repozytorium gitlab: https://gitlab.com/bart_as93/youtube-downloader
<!-- truncate -->
### 1. Konfiguracja wstępna

Pobierz repozytorium na lokalną maszynę:

```bash
git clone https://gitlab.com/bart_as93/youtube-downloader.git
cd youtube-downloader
```

Sprawdź wersje pythona

```bash
python --version
```

W moim przypadku `Python 3.11.4`

Następnie instalujemy zależności

```bash
pip install -r requirements.txt
```

Następnie uruchamiamy skrypt np.:

```bash
python .\downloader.py -u https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d music -f mp4
```

Skrypt przyjmuje 4 argumenty:

- `-f` - jeden z formatów: mp3 albo mp4
- `-d` - docelowy folder w którym mają znajdować się ściągnięte pliki
- i jedno z pożniszych:
  - `-u` - Url do wideo na platformie YouTube
  - `-pu` - Url do playlisty na platformie Youtube

### Pobieranie YouTube video w formacie mp4

Aby ściągnąć film YouTube trzeba użyć flagi `-u <link_do_filmu>` oraz flagę `-f mp4`

```bash
python .\downloader.py -u https://www.youtube.com/watch?v=a59gmGkq_pw -d movies -f mp4
```

### Pobieranie YouTube video w formacie mp3

Aby ściągnąć audio z YouTube trzeba użyć flagi `-u <link_do_filmu>` oraz flagę `-f mp3`

```bash
python .\downloader.py -u https://www.youtube.com/watch?v=a59gmGkq_pw -d music -f mp3
```

### Pobieranie playlisty YouTube w formacie mp4

Aby ściągnąć filmy z Playlisty YouTube trzeba użyć flagi `-pu <link_do_playlisty>` oraz flagę `-f mp4`

```bash
python .\downloader.py -pu https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d music-f mp4
```

### Pobieranie YouTube Playlist w formacie mp3

Aby ściągnąć audio z Playlisty YouTube trzeba użyć flagi `-pu <link_do_playlisty>` oraz flagę `-f mp3`

```bash
python .\downloader.py -pu https://www.youtube.com/playlist?list=PLRomwVsNGznFggOY71VFRH_Wi8IOXj3hb -d movies -f mp3
```

## Omówienie kodu (komentarze):

```python
import argparse
import os
from pytube import Playlist
from pytube import YouTube

# Program obsługuje 2 formaty mp3 i mp4. W sekcji else przy innym formacie program jest wyłączany
def downloadByVideo(vid):
    print('downloading : {} - {} with url : {}'.format(video.author, video.title, video.watch_url))
    global type
    vidFileName = vid.author + " - " + vid.title + "." + format
    if format == 'mp3':
        type = 'audio'
# Na obiekcie video odwołujemy się do streams, filtrujemy tylko audio i wywołujemy metodę download z opcjami opisującymi docelowy katalog w którym zostanie zapisany plik oraz nazwę pliku
        vid.streams. \
            filter(only_audio=True).desc().first(). \
            download(output_path=DOWNLOAD_DIR, filename=vidFileName)
    elif format == 'mp4':
        type = 'video'
# Na obiekcie video odwołujemy się do streams, filtrujemy tylko video, sortujemy od największego resolution i wywołujemy metodę download z opcjami opisującymi docelowy katalog w którym zostanie zapisany plik oraz nazwę pliku
        vid.streams. \
            filter(type=type, progressive=True, file_extension=format). \
            order_by('resolution'). \
            desc(). \
            first(). \
            download(output_path=DOWNLOAD_DIR, filename=vidFileName)
    else:
        print(f"Not supported format type: {format}")
        exit()

# Obsługa parametrów command line i sprawdzenie wymaganych pól
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

# Sprawdzamy czy wprowadzony został url do Playlisty (-pu) czy url do filmu (-u) i na podstawie url ściągany jest film lub playlista
if(args.PlayListUrl):
    playlist = Playlist(args.PlayListUrl)
    print (f"Downloading {len(playlist.videos)} files from playlist with url: {args.Url}, with format: {args.Format}, to dir: {DOWNLOAD_DIR}")

    for video in playlist.videos:
        downloadByVideo(video)

if (args.Url):
    video = YouTube(args.Url)
    downloadByVideo(video)
```