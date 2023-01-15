import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const mainKeyName = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
const onPlay = function({seconds}) {
    localStorage.setItem(mainKeyName, seconds);
    console.log(seconds);
};
player.on('timeupdate', throttle(onPlay,"1000"));
player.setCurrentTime(localStorage.getItem(mainKeyName));