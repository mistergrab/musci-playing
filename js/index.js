console.log('hello')
let musicList =
    fetch('/data.json').then(res => res.json()).then(ret => {
        console.log(ret)
        musicList = ret
        setMusic()

    })

const $ = selector => document.querySelector(selector)

const $playingBtn = $('.player .icon-star')
const $preBtn = $('.player .icon-left')
const $nextBtn = $('.player .icon-right')
const $Stop = $('.player .icon-stop')
const $title = $('.player .texts h3')
const $auther = $('.player .texts p')
const $time = $('.player .time')
const $progress = $('.player .progress')

let index = 0
let clock = null
let audioObject = new Audio()

function setMusic() {
    let curMusic = musicList[index]
    audioObject.src = curMusic.src
    $auther.innerText = curMusic.auther
    $title.innerText = curMusic.title
    audioObject.play()
}
$Stop.onclick = function() {
    audioObject.pause()
}

function secondToText(second) {
    second = parseInt(second)
    let min = parseInt(second / 60)
    let sec = second % 60
    sec = (sec + '').length == 1 ? '0' + sec : sec
    return min + ':' + sec
}

$playingBtn.onclick = function() {
    if (this.classList.contains('icon-star')) {
        this.classList.remove('icon-star')
        this.classList.add('icon-stop')
        audioObject.play()
        console.log(audioObject.duration)
        console.log(audioObject.currentTime)
        clock = setInterval(function() {
            let curTime = audioObject.currentTime
            let totalTime = audioObject.duration
            let percent = curTime / totalTime
            $progress.style.width = percent * 100 + '%'
            $time.innerText = secondToText(curTime) + '/' + secondToText(totalTime)
        }, 1000)

    } else {
        this.classList.remove('icon-stop')
        this.classList.add('icon-star')
        audioObject.pause()
        clearInterval(clock)
    }
}

$nextBtn.onclick = function() {
    index++
    index = ++index % musicList.length
    setMusic()
}

$preBtn.onclick = function() {
    index--
    index = (index + musicList.length) % musicList.length
    setMusic()
}

/*let $preBtn = document.querySelector('.icon-star')
let $$btns = document.querySelectorAll('.iconfont')
let $nextBtn = document.querySelector('.icon-right')

console.log($$btns)

// console.log($preBtn.classList.contains('icon-stop'))
// $preBtn.classList.remove('icon-star')
// $preBtn.classList.add('icon-stop')
let audioObject = new Audio('http://cloud.hunger-valley.com/music/玫瑰.mp3')

$preBtn.onclick = function(e) {
    if ($preBtn.classList.contains('icon-star')) {
        $preBtn.classList.remove('icon-star')
        $preBtn.classList.add('icon-stop')
        audioObject.play()
        console.log(audioObject.duration)
        console.log(audioObject.currentTime)
    } else {
        $preBtn.classList.remove('icon-stop')
        $preBtn.classList.add('icon-star')
        audioObject.pause()
    }
    console.log('点击了')


}
$nextBtn.onclick = function() {
    audioObject.src = "http://cloud.hunger-valley.com/music/ifyou.mp3"
    audioObject.play()

}
console.log($nextBtn)
*/