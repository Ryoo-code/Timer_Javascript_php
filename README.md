# ポモドーロタイマー

## 概要
集中力を高めるための「ポモドーロ・テクニック」を取り入れた学習・作業支援用タイマーアプリ

## 背景・目的
自分専用のタイマー兼記録アプリが欲しいと思い、シンプルかつカスタマイズ可能なタイマーを制作。
JavaScriptとphp(予定)の基礎を勉強し、このポートフォリオで実践し、技術を身に付けることを目的とする。

## アプリの操作方法
-「集中時間を選択」でタイマー時間を設定
- Start ボタンでタイマー開始
- 00:00 になるとアラームが鳴ります
- 終了したい場合 → Reset
- 休憩したい場合 → Rest（5分タイマー）
- 休憩後にもアラームが鳴ります
- 再び集中する場合は、時間を選び Start を押してください

## 使用技術
- HTML
- CSS
- JavaScript
- php(予定)
- SQL(予定)

## 主な機能（Rev01）
- 25分集中 / 5分休憩のポモドーロタイマー
- 開始・停止・リセットボタン
- タイマー完了時にアラート音を再生

## 今後のアップデート予定
- Rev02: タイマー実行ログの保存機能
- Rev03: 学習履歴のグラフ表示

## 問題点
# Rev01
- スマホの場合、アラーム鳴らない⇒モバイルブラウザの再生ポリシーが厳しいため
- GitHubのリンクから開くと色が違う（エクスプローラー、スマホから開いた時は問題なし）
# Rev02
- タイトルとハンバーガーメニューが同じ高さではない。（見た目上は合うように数値で調整）

## Rev01 WF(Figma)
<img width="324" height="230" alt="image" src="https://github.com/user-attachments/assets/aa9e41c8-da01-4b15-a696-27d5efad4d61" />

## Rev01-00 実装:JSは未実装の為、タイマー表記無し
<img src="Rev01-00.png" alt="タイマー未実装画面" width="324" height="230" />

## Rev01-01 実装:JS実装済み、タイマー表記、ボタン機能追加
<img width="382" height="286" alt="image" src="https://github.com/user-attachments/assets/d26d50a8-d634-4370-813c-1ea6cd60f1d9" />

## Rev02 WF(Figma)
<img width="371" height="260" alt="image" src="https://github.com/user-attachments/assets/ce6d878f-e064-40e1-a527-8a8f9240622e" />

## Rev02-00 実装:ハンバーガーメニュー表示のみ
<img width="282" height="640" alt="image" src="https://github.com/user-attachments/assets/d7eafb7b-9c33-4ace-8b85-4bd3d4baea82" />
