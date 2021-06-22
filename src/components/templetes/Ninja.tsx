import React, { useEffect } from 'react'

// 広告タイプの型
type AdmaxAdType = {
  admax_id: string // 広告ID
  type: string // PC/SP切替広告なら"switch"
}
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    admaxads: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __admax_tag__: any
  }
}
interface Props {
  id: string
}
// PC/SP切替広告のReactコンポーネント
const AdmaxSwitch: React.FC<Props> = ({ id }) => {
  useEffect(() => {
    // windowオブジェクトの広告リストを初期化
    if (!window['admaxads']) window['admaxads'] = []
    // 広告リストを取得
    const admaxads: AdmaxAdType[] = window['admaxads']
    // 広告リストになかったら追加
    if (!admaxads.some((ad) => ad.admax_id === id))
      admaxads.push({
        admax_id: id,
        type: 'switch',
      })
    // 外部JSを読み込んで広告リストを実際に表示
    const tag = document.createElement('script')
    tag.src = 'https://adm.shinobi.jp/st/t.js'
    tag.async = true
    document.body.appendChild(tag)
    // アンマウント時にJSタグと広告情報を削除
    return () => {
      document.body.removeChild(tag)
      admaxads.splice(
        admaxads.findIndex((ad) => ad.admax_id === id),
        1,
      )
      window['__admax_tag__'] = undefined
    }
  }, [id])
  return (
    <div
      className="admax-switch"
      data-admax-id={id}
      style={{ display: 'inline-block' }}
    />
  )
}

export default AdmaxSwitch
