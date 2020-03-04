## gulpの使い方

`$ npm install`

`$ gulp`



## コーディング手順

1. 対応ブラウザ、パスの指定方法、納品形式、アニメーションの実装などの仕様を確認。

2. デザインを見て、頭の中でコードを組み立てる。この際、「クラス名の命名」「共通要素の洗い出し」「実際のコーディングで直面しそうな問題の把握（実装の仕方がわからないなど）」を明確にする。

3. 画像の書き出し。画像ファイルの命名も「ttl_」「bg_」「ico_」「btn_」「img_」「nav_」などの接頭辞をつけ、画像がどのような意味を持つのか考えながら命名。
「接頭辞」_「ページ名」_「連番」の順で命名する。
また、背景透過、画質などを考慮し「png-8」「png-24」「jpg」「gif」などを適切な拡張子を選択する。
加えて、高解像度ディスプレイ対応のため２倍の大きさで書き出し。
さらに、ファイルサイズを考慮し、適切に圧縮をかける。

4. このテンプレートを使用し、まずは大枠、共通部分のコーディング、それから細部のコーディングを進める。

5. コーディング完了後はW3Cのバリデーションツールで文法のエラーをチェック。

6. 各種チェック項目
    a.altが正しく入ってるか
    b.誤字がないか
    c.タイポグラフィーがあっているか
    d.色があっているか
    e.マークアップの構造が適切か
    f.どの画面幅でも崩れていないか
    g.アニメーションの挙動は適切か
    h.デザインとのずれがないかパーフェクトピクセルで確認
    i.IE、Edge、Safari、FireFox、Chrome各ブラウザで表示確認
    j.リンクは適切に入ってるか
    k.横スクロースしないか
    l.画像が重すぎないか

7. 修正の対応/完了



## コーディング規則等

* HTML、SCSS共に、セクションごとの開始と終わりにコメントで区切りをわかりやすくする。

* SCSSのプロパティ順はposition, padding, margin, top,bottomなど「位置、余白」に関わるものを一番上に書き、あとはアルファベット順に整理する。

* 命名規則は基本はBEM、共通要素が多く、下層ページの多いサイトにはモジュールコーディングを採用（接頭辞つけるやつ）。

* パスは指定がなければ基本相対パス（ドキュメントパス）を使用。

* 文章構造はHTML、装飾はCSSに分離（ただしマテリアルデザインなどの場合は例外的にHTMLで装飾を施すこともやむを得ない）。

* どの画面幅でも表示が崩れないようなフルードデザインを極力使用。（320px~1900pxの画面幅で確認）

* ブラウザは「safari」「firefox」「IE(x)」「chrome」「iPhone」「アンドロイド」で確認
＊IEに関してはWindowsの実機で確認

* ブレイクポイントは基本的にはBootstrapのものに合わせて「スマホ　768px」で「タブレット　992px」（デザインによっては例外あり）

* 位置や色ではなく、役割や意味を表す識別名をつけることを命名ルールにする。また、その単語からパーツを推測できるようにする。
加えて、長くなりすぎないように意味が分かる範囲で単語を短くする。

* padding,margin,backgroundのように複数の値を一度に指定できるプロパティに対して、基本的に２つ以上に個別指定が必要な場合は、ショートハンドプロパティを使って一括して指定する。

* 命名の際に数字を用いる際は「01」「02」のように２桁の連番で表記する。