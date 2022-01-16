console.log('hello')
let musicList = [{
        "src": "http://jirengu_1.gitee.io/music/ifyou.mp3",
        "title": "IF YOU",
        "auther": "Big Bang",
        "img": "http://jirengu_1.gitee.io/music/if-you.png"
    },
    {
        "src": "http://jirengu_1.gitee.io/music/夏日示爱-郭彩洁-暖手心.m4a",
        "title": "暖手心",
        "auther": "郭彩洁",
        "img": "http://jirengu_1.gitee.io/music/夏日示爱-郭彩洁-暖手心.jpg"
    },
    {
        "src": "http://jirengu_1.gitee.io/music/玫瑰.mp3",
        "title": "玫瑰",
        "auther": "贰佰",
        "img": "http://jirengu_1.gitee.io/music/玫瑰.jpeg"
    },
    {
        "src": "http://jirengu_1.gitee.io/music/成全-林宥嘉-成全.m4a",
        "title": "成全",
        "auther": "林宥嘉",
        "img": "http://jirengu_1.gitee.io/music/成全-林宥嘉-成全.jpg"
    },
    {
        "src": "http://jirengu_1.gitee.io/music/飞行器的执行周期-郭顶-水星记.m4a",
        "title": "水星记",
        "auther": "郭顶",
        "img": "http://jirengu_1.gitee.io/music/飞行器的执行周期-郭顶-水星记.jpg"
    }
]


const $ = selector => document.querySelector(selector)

const $playingBtn = $('.player .icon-star')
const $preBtn = $('.player .icon-left')
const $nextBtn = $('.player .icon-right')
const $Stop = $('.player .icon-stop')
const $title = $('.player .texts h3')
const $auther = $('.player .texts p')
const $time = $('.player .time')

let index = 0
let audioObject = new Audio()
setMusic()

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
$playingBtn.onclick = function() {
    if (this.classList.contains('icon-star')) {
        this.classList.remove('icon-star')
        this.classList.add('icon-stop')
        audioObject.play()
        console.log(audioObject.duration)
        console.log(audioObject.currentTime)
    } else {
        this.classList.remove('icon-stop')
        this.classList.add('icon-star')
        audioObject.pause()
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