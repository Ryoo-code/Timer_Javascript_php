//HTMLの要素を取得(JSを影響させたい要素を取得し、定数に代入)
const timerDisplay = document.getElementById('timer');
const timeSelect =document.getElementById('timeselect');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const alarm = document.getElementById('alarm-sound');
const restBtn = document.getElementById('rest');

//ユーザーがどんな操作をするのか→時間を選択→スタート→ポーズ,ストップ,レスト
//状態が変化していくものは、内部的に使う「状態の変数」を自分で宣言
let duration; // 分で選択したものを秒に変換
let remainingTime; // 残り時間をカウントダウンするときに使う
let timerId; // setIntervalのIDを保存して、一時停止や停止に使う
let currentTime = 5 *60; //休憩は5分とする

// 時間表示を関数化
// 関数で初期値も、変更後も表示するイベントの冗長性を削減
function updateTimerDisplayFromSelect() {
    //optionで選ばれるvalueを取得,parseIntで文字列を数値に変換
    const selectedMinutes = parseInt(timeSelect.value, 10);
    const seconds = selectedMinutes * 60;
    //分と秒に分けて考える,Math.floorは小数点以下を切り捨てる関数,
    //文字列.padStart(長さ,'追加する文字')→2桁表示で、足りない場合は0を補填する
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${sec}`;
}
// Restボタンからタイマーを開始したときにアラームが鳴らないようにするため、モード引数を追加
// setIntervalの機能がstartBtnとrestBtnに影響を与えrestBtnでアラームが止まらなかった
function startTimer(mode = 'work'){ //workというデフォルト値を設定→呼び出し側で引数を省略するとworkになる
    clearInterval(timerId); // すでに動いてるタイマーを止める
    timerId = setInterval(() => { //setInterval() で1秒ごとに実行される処理をスタート
        remainingTime--;
        const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
        const sec = String(remainingTime % 60).padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${sec}`;
        if (remainingTime <= 0) {
            clearInterval(timerId);
            timerDisplay.textContent = '00:00';
            if (mode === 'work' || mode === 'rest') {
                alarm.play();
            }
        }
    },1000)
}

// ページ読み込み時に初期値を表示
window.addEventListener('DOMContentLoaded', updateTimerDisplayFromSelect)
// セレクトボックスの値が変わったときに更新
timeSelect.addEventListener('change', updateTimerDisplayFromSelect)

// Startbtnの機能を作成
startBtn.addEventListener('click', ()=> {
    // アラーム音が鳴っていた場合は止めて、再生位置も0に戻す
    alarm.pause();
    alarm.currentTime = 0;
    clearInterval(timerId)
    duration = parseInt(timeSelect.value, 10) * 60;//選択された25分という文字列を数値に変換し、秒数に
    remainingTime = duration;
    startTimer('work');
})
// pauseBtnの機能作成
pauseBtn.addEventListener('click', ()=> {
    clearInterval(timerId); // timerIdの繰り返し関数を止める関数
})
// stopBtnの機能作成
resetBtn.addEventListener('click', ()=> {
    clearInterval(timerId); // timerIdの繰り返し関数を止める関数
    updateTimerDisplayFromSelect();
    alarm.pause(); //音が一時停止する
    alarm.currentTime = 0; //音楽の再生が0秒の状態になる
})

restBtn.addEventListener('click', ()=> {
    clearInterval(timerId); // timerIdの繰り返し関数を止める関数
    // タイマー表示を更新（秒数から計算）
    const minutes = String(Math.floor(currentTime / 60)).padStart(2, '0');
    const sec = String(currentTime % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${sec}`;
    remainingTime = currentTime; // 新しい時間をセット(強制的に5分)
    alarm.pause();           // アラームを一時停止
    alarm.currentTime = 0; 
    startTimer('rest'); // 再スタート
})