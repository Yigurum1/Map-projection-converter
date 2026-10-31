function validateSettings(data, catalog, imageWidth, imageHeight) {
  const fail = message => { throw new Error(message); };
  if (!data || typeof data !== 'object' || Array.isArray(data) || data.version !== 1)
    fail('対応していない設定形式です。このツールで保存したJSONを選択してください。');
  for (const key of ['source', 'target']) {
    const p = data[key];
    if (!p || !catalog.includes(p.name)) fail('設定内の投影法が対応していません。');
    for (const [field, limit] of [['lon',180],['lat',90],['p1',80],['p2',80]])
      if (typeof p[field] !== 'number' || !Number.isFinite(p[field]) || Math.abs(p[field]) > limit)
        fail('設定内の経度・緯度が不正です。');
  }
  const c = data.crop;
  if (!c || !['x','y','w','h'].every(k => Number.isSafeInteger(c[k])) || c.x < 0 || c.y < 0 || c.w < 1 || c.h < 1)
    fail('設定内の切り抜き範囲が不正です。');
  if (c.x + c.w > imageWidth || c.y + c.h > imageHeight)
    fail('切り抜き範囲が現在の画像より大きいため復元できません。元の地図画像を選択してから、設定を読み込み直してください。');
  if (![1024,2048,4096].includes(data.width) || !['smooth','nearest'].includes(data.sampling))
    fail('設定内の出力サイズ・補間方法が不正です。');
  if (data.graticule !== undefined && (!data.graticule || typeof data.graticule.source !== 'boolean' || typeof data.graticule.target !== 'boolean')) fail('経緯線の表示設定が不正です。');
  return data;
}
