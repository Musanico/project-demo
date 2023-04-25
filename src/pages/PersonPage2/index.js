import "@/pages/PersonPage2/index.css"
import Nav from '@/components/nav'
import PersonSidebar from '@/components/person-sidebar'
import ScrollLock from 'react-scrolllock'

function Tperson2(){
  return(
      <div>
        <Nav/>
        <ScrollLock>
          <div className="tp2-sidebar">
            <PersonSidebar/>
          </div>
        </ScrollLock>
        <div className="tp2-main">
          <div className="tp2-intro">
            从事人工智能分支中视觉识别技术研究，主要采用计算机视觉和机器学习方法（如深度学习技术）去认识和理解包括二维图像和三维模型在内的可视化媒体，涉及层次大规模图像识别、图像隐私保护以及三维模型检索等。在国内外知名期刊和国际会议上共发表论文20余篇（例如PAMI、TIFS、TIP、PR、PRL、CAD等）。承担中央高校自主创新课题1项，参与包括国家自然基金以及山东基金在内的多项课题。参加的高水平国际会议，包括ACM Siggraph Asia、SPM、ICMR以及SMI等，获得CAD/Graphics 2015国际会议最佳论文奖。担任多个国际期刊审稿人，如TNNLS、Information Sciences、ICMR、MTA以及MultimediaSystem等。
          </div>
        </div>
      </div>
  )
}

export default Tperson2