# Kashima [![Discord](https://discordapp.com/api/guilds/382725233695522816/embed.png)](https://discord.gg/7TtMP2n) [![Travis CI](https://travis-ci.org/auguwu/kashima.svg?branch=master)](https://travis-ci.org/auguwu/kashima)
Kashima is an Electron player that will listen to music :musical_note: within a directory.


## Notes
This is my instance of kashima that I coded myself, all the songs are my personal favourite songs to listen to. If you want to change it, do the following:

- 1: Install VSCode (or any editor)
- 2: Open VSCode (or any editor)
- 3: Clone the repository
- 4: cd to the folder (File -> Open Folder for VSCode)
- 5: Click on `src/static/js/renderer.js`
- 6: On the song name function, rename the titles to the song titles
- 7: Add the songs into the `src/static/songs` directory.
- 8: Run the application (`npm start`)

## Installation
```sh
# You must have the following:
# - node.js: v8
# - git: any

# Clone the repository and go in it
$ git clone https://github.com/auguwu/kashima.git && cd kashima

# Install the dependencies
$ npm i

# Start the application
$ npm start
```

### Installation: Starting the application
When you start up Kashima, you might encounter into some errors. You must add a folder called `songs` and put all of your songs in that directory so Kashima can see then load them. Kashima supports 3 filetypes: `mp3`, `flac`, and `ogg`. When you added them, you may start Kashima with `npm start` in the root directory of the project and it should work fine.

## License
> [Kashima](https://github.com/auguwu/kashima) is maintained by [auguwu](https://augu.me) and is licensed under MIT. The cover art doesn't belong to auguwu, so credit goes to them.

```
Copyright (c) 2018-present auguwu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```