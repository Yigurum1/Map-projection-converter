(()=>{
const langs={ja:'日本語',en:'English','zh-CN':'简体中文','zh-TW':'繁體中文',ko:'한국어',es:'Español',fr:'Français',de:'Deutsch',pt:'Português',ru:'Русский',ar:'العربية',hi:'हिन्दी'};
let lang='ja';try{const s=localStorage.getItem('atlas-language');if(langs[s])lang=s;}catch{}
const english={
'PNG・JPEG・WebP ／ ドロップも対応':'PNG / JPEG / WebP · Drag & drop supported',
'サンプルの世界地図を表示中':'Sample world map', 'サンプル世界地図':'Sample world map','サンプルを準備しています…':'Preparing sample…','準備中':'Preparing',
'画像内の地図外枠を指定。凡例・タイトル・余白は除いてください。全投影範囲の画像が対象です。':'Specify the map bounds in pixels, excluding margins, titles and legends. Use the full projection extent.',
'設定を変更しました。「この設定で変換」で更新してください。':'Settings changed. Press Convert to update.',
'変換しています…':'Converting…','変換完了。PNGとして保存できます。':'Conversion complete. You can save the PNG.',
'変換を中止しました。':'Conversion cancelled.',
'元画像内に収まる切り抜き範囲を指定してください。':'The crop must fit inside the source image.',
'経度は±180°、緯度は±90°の範囲で指定してください。':'Longitude must be within ±180° and latitude within ±90°.',
'変換処理に失敗しました。解像度を下げて再試行してください。':'Conversion failed. Reduce the resolution and try again.',
'PNG・JPEG・WebP画像を選んでください。':'Choose a PNG, JPEG or WebP image.',
'画像が大きすぎます。2400万画素以下に縮小してください。':'Image too large. Resize to at most 24 megapixels.',
'元の投影法と中央経線を指定してから変換してください。':'Set the source projection and central meridian, then convert.',
'保存に失敗しました。':'Save failed.',
'サンプルを読み込めませんでした。地図画像を選択してください。':'Could not load the sample. Choose a map image.',
'設定ファイルが大きすぎます。保存した設定JSONを選択してください。':'Settings file too large. Select an exported settings JSON.',
'JSONを読み取れませんでした。保存した設定JSONを選択してください。':'Invalid JSON. Select an exported settings JSON.',
'変換が終わってから設定を読み込んでください。':'Wait for conversion to finish before loading settings.',
'設定を読み込みました。元画像を確認して「この設定で変換」を押してください。':'Settings loaded. Check the source image, then press Convert.',
'設定読み込みエラー：':'Settings import error: ',
'対応していない設定形式です。このツールで保存したJSONを選択してください。':'Unsupported settings format. Select a JSON exported by this tool.',
'設定内の投影法が対応していません。':'Unsupported projection in settings.',
'設定内の経度・緯度が不正です。':'Invalid coordinates in settings.',
'設定内の切り抜き範囲が不正です。':'Invalid crop in settings.',
'切り抜き範囲が現在の画像より大きいため復元できません。元の地図画像を選択してから、設定を読み込み直してください。':'The saved crop exceeds this image. Load the original image, then import settings again.',
'設定内の出力サイズ・補間方法が不正です。':'Invalid output size or resampling method in settings.',
'経緯線の表示設定が不正です。':'Invalid graticule setting.',
'このパラメータでは投影できません':'Cannot project with these parameters.',
'出力が大きすぎます。解像度または投影法を変更してください。':'Output too large. Change the resolution or projection.',
'経緯線のチェックは、選択中のタブに適用されます。元画像と変換後の表示設定は別々に保持します。変換後の経緯線はPNG保存にも反映されます。元画像自体に描かれている経緯線は消せません。':'The graticule switch applies to the active tab. Source and result keep separate settings. The output graticule is included in PNG exports. Lines already drawn in the source image cannot be removed.',
'設定の復元：先に元の地図画像を選択し、「設定ファイル → 読み込む」で保存済みのJSONを選んでください。画像自体は設定ファイルに含まれません。':'To restore settings, first load the source image, then load your saved JSON. Images are not included in settings files.',
'出力の中央経線を変更すると、地図の左右端の位置を調整できます。':'Change the output central meridian to move the map seam.',
'①画像を選択 → ②元画像と同じ投影法・中央経線を指定 → ③出力投影法を選択 → 変換。元画像タブの経緯線で位置合わせを確認できます。':'Choose an image, match its projection and central meridian, select a target projection, then convert. Use the source graticule to check alignment.',
'掲載している投影法はすべて入力・出力に選択できます。投影法の自動判定は行いません。球面モデル・各投影法の既定形状を使用します。独自の断裂位置や衛星高度、楕円体測地系、切り抜いた地域図の座標補正には対応していません。':'Every listed projection can be used as source or target. No automatic detection. Uses a spherical model and default projection shapes. Custom interruptions, satellite altitudes, ellipsoidal coordinate systems and georeferencing cropped regional maps are unsupported.',
'正射投影法などに写っていない地域や、極域が欠けた画像の情報は復元できません。欠損・投影範囲外は透明になります。メルカトルは標準の正方形範囲（約±85.05°）です。円錐投影法の標準緯線、その他の投影法の標準緯線1は該当する場合に適用します。':'Missing regions cannot be recovered. Unavailable areas are transparent. Mercator uses the standard square extent (about ±85.05°). Standard parallels apply to projections that support them.',
'文字や凡例も画像の一部として変形します。高緯度や断裂線付近では解像度低下や境界誤差が生じます。読み込み上限は約2400万画素です。':'Text and legends are warped with the image. High latitudes and interruptions may show resolution loss or boundary errors. Input limit: approximately 24 megapixels.',
'投影計算：':'Projection engine: ', ' · サンプル：Natural Earth / world-atlas · ':' · Sample: Natural Earth / world-atlas · ',
'イコールアース':'Equal Earth','元画像':'Source','変換結果':'Converted result','透明背景':'Transparent background','投影法・相互変換':'projections · bidirectional','に切り替え':'','現在：':'Current: '
};
const states={
'変換しています…':['Converting…','正在转换…','正在轉換…','변환 중…','Convirtiendo…','Conversion…','Umwandlung…','Convertendo…','Преобразование…','جارٍ التحويل…','बदल रहे हैं…'],
'変換完了。PNGとして保存できます。':['Conversion complete. Save PNG.','转换完成，可保存PNG。','轉換完成，可儲存PNG。','변환 완료. PNG로 저장하세요.','Conversión completada. Guarde el PNG.','Conversion terminée. Enregistrez le PNG.','Umwandlung fertig. PNG speichern.','Conversão concluída. Salve o PNG.','Готово. Сохраните PNG.','اكتمل التحويل. احفظ PNG.','परिवर्तन पूरा हुआ। PNG सहेजें।'],
'設定を変更しました。「この設定で変換」で更新してください。':['Settings changed. Press Convert.','设置已更改，请点击转换。','設定已變更，請按轉換。','설정 변경됨. 변환을 누르세요.','Ajustes modificados. Pulse Convertir.','Réglages modifiés. Cliquez sur Convertir.','Einstellungen geändert. Umwandeln drücken.','Configurações alteradas. Clique em Converter.','Настройки изменены. Нажмите «Преобразовать».','تغيرت الإعدادات. اضغط تحويل.','सेटिंग बदली गई। बदलें दबाएँ।'],
'変換を中止しました。':['Conversion cancelled.','已取消转换。','已取消轉換。','변환 취소됨.','Conversión cancelada.','Conversion annulée.','Umwandlung abgebrochen.','Conversão cancelada.','Преобразование отменено.','تم إلغاء التحويل.','परिवर्तन रद्द किया गया।']
};
Object.entries(states).forEach(([key,values])=>Object.keys(translations).forEach((l,i)=>translations[l][key]=values[i]));
const originals=new WeakMap(), rendered=new WeakMap();
function translate(raw){if(lang==='ja')return raw;const dict={...english,...translations.en,...translations[lang]};let text=raw;for(const k of Object.keys(dict).sort((a,b)=>b.length-a.length)){if(text.includes(k))text=text.split(k).join(dict[k]);}return text;}
function node(n){const raw=n.nodeValue;if(!raw?.trim())return;const parent=n.parentElement;if(!parent||parent.closest('script,style,#language'))return;if(raw!==rendered.get(n)) originals.set(n,raw);const original=originals.get(n)||raw;if(parent.closest('#fileinfo')&&!original.startsWith('サンプル世界地図')&&!original.startsWith('変換結果')&&!original.startsWith('サンプルの世界地図'))return;let value=translate(original);if(lang!=='ja'&&parent.closest('#src,#dst,#maptitle')&&value.includes(' / '))value=value.split(' / ').pop();if(raw!==value)n.nodeValue=value;rendered.set(n,value);}
function scan(root){if(root.nodeType===3){node(root);return;}const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(walker.nextNode())node(walker.currentNode);}
window.atlasTranslate=translate;
function apply(){const control=document.getElementById('language');if(control){let label=control.options[control.selectedIndex]?.text||'';let units=Array.from(label).reduce((n,c)=>n+(c.charCodeAt(0)>255?1.8:1),0);control.style.width=Math.max(120,Math.min(176,units*7+78))+'px';}const themeButton=document.getElementById('theme-toggle');if(themeButton){const next=document.documentElement.dataset.theme==='dark'?'ライトテーマ':'ダークテーマ';themeButton.setAttribute('aria-label',translate(next));themeButton.title=translate(next);}document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';scan(document);document.title=lang==='ja'?'Atlas — 地図投影法変換':'Atlas — '+translate('地図投影法変換');}
window.addEventListener('DOMContentLoaded',()=>{const select=document.getElementById('language');Object.entries(langs).forEach(([id,label])=>select.add(new Option(label,id)));select.value=lang;select.onchange=()=>{lang=select.value;try{localStorage.setItem('atlas-language',lang);}catch{}apply();};apply();new MutationObserver(records=>{for(const r of records){if(r.type==='characterData')node(r.target);else r.addedNodes.forEach(scan);}}).observe(document.body,{subtree:true,childList:true,characterData:true});});
})();
