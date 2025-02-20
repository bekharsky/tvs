# TV Art

Convert image sequence to a video: 

```
$ ffmpeg -f image2 -r 25 -pattern_type glob -i '*.png' -vcodec libx264 -crf 22 video.mp4
```
