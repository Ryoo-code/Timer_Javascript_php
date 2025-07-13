//HTMLの要素を取得(JSを影響させたい要素を取得し、定数に代入)
const timerDisplay = document.getElementById('timer');
const timeSelect =document.getElementById('timeselect');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

//ユーザーがどんな操作をするのか→時間を選択→スタート→ポーズ,ストップ
//時間を選択する
//スタートボタンは、タイマーを1秒ごとに減らしながら画面に表示する機能
//ストップはタイマーを完全に止めたときに、リセットする
//ポーズはタイマーを一時停止
//状態が変化していくものは、内部的に使う「状態の変数」を自分で宣言
let duration; // 分で選択したものを秒に変換
let remainingTime; // 残り時間をカウントダウンするときに使う
let timerId; // setIntervalのIDを保存して、一時停止や停止に使う

// 時間表示を関数化
// 関数で初期値も表示、変更後も表示するイベントの冗長性を削減
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
// ページ読み込み時に初期値を表示
window.addEventListener('DOMContentLoaded', updateTimerDisplayFromSelect)
// セレクトボックスの値が変わったときに更新
timeSelect.addEventListener('change', updateTimerDisplayFromSelect)