const {Eyebrow,SectionHeading,NewsCard,Button}=window.DS||{};
const NEWS=[
 {image:"../../assets/imagery/news-bodleian-gate.png",date:"10 Jun 2025",author:"Elizabeth Lincoln",title:"Oxford physicists set new world record for qubit operation accuracy",readTime:"9 min Read"},
 {image:"../../assets/imagery/news-graduation.png",date:"10 Jun 2025",author:"Elizabeth Lincoln",title:"Oxford tops national spinout rankings in 2025 report",readTime:"9 min Read"},
 {image:"../../assets/imagery/news-radcliffe-sky.png",date:"10 Jun 2025",author:"Elizabeth Lincoln",title:"Oxford named best university in the world for a record ninth consecutive year",readTime:"9 min Read"}];
function NewsScreen({onOpenArticle}){
  return <section style={{padding:"58px 40px 70px"}}>
    <Eyebrow style={{textAlign:"center",marginBottom:12}}>News</Eyebrow>
    <SectionHeading size="h1" align="center">Discover the Latest News in Oxford</SectionHeading>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:26,marginTop:56}}>
      {NEWS.map(n=><NewsCard key={n.title} {...n} onRead={()=>onOpenArticle&&onOpenArticle(n)} />)}
    </div>
    <div style={{display:"flex",justifyContent:"center",marginTop:46}}><Button variant="ghost" icon="arrow-right">View all news</Button></div>
  </section>;
}
function ArticleScreen({article,onBack}){
  if(!article)return null;
  return <article style={{padding:"46px 40px 70px",maxWidth:760,margin:"0 auto"}}>
    <Button variant="ghost" icon="arrow-right" onClick={onBack} style={{marginBottom:28}}>Back to news</Button>
    <Eyebrow style={{marginBottom:12}}>News</Eyebrow>
    <SectionHeading size="h1">{article.title}</SectionHeading>
    <div style={{display:"flex",gap:18,fontSize:"var(--fs-caption)",color:"var(--text-faint)",margin:"18px 0 26px"}}>
      <span>{article.date}</span><span>{article.author}</span><span>{article.readTime}</span>
    </div>
    <div style={{borderRadius:"var(--radius-media)",overflow:"hidden",aspectRatio:"16/9"}}>
      <img src={article.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
    </div>
    <p style={{marginTop:28,fontSize:"var(--fs-body-l)",lineHeight:"var(--lh-body-l)",color:"var(--text-body)"}}>
      Researchers across the University have reported a result that extends Oxford's long record of discovery. The work was carried out in collaboration with partners across four continents and will be published in full later this term.</p>
    <p style={{marginTop:18,fontSize:"var(--fs-body-l)",lineHeight:"var(--lh-body-l)",color:"var(--text-body)"}}>
      Further detail was not present in the source material provided for this design system; this paragraph stands in for article body copy.</p>
  </article>;
}
Object.assign(window,{NewsScreen,ArticleScreen,NEWS});
