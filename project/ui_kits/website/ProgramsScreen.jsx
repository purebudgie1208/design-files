const {Eyebrow,SectionHeading,ProgramRow,StatCard,Button,MediaShowcase}=window.DS||{};
const PROGRAMS=[
 {index:"01",title:"Undergraduate",description:"World-class bachelor's degrees with personalised tutorials and a rich academic environment across arts, sciences, and humanities."},
 {index:"02",title:"Graduate",description:"Advanced master's and doctoral studies guided by leading researchers, designed to shape future leaders and experts."},
 {index:"03",title:"Continuing Education",description:"Flexible learning for professionals and adults, offering online and in-person programs to support lifelong development."},
 {index:"04",title:"Short Courses",description:"Quick, focused learning across diverse topics — ideal for upskilling, exploring new interests, or experiencing Oxford in brief."}];
function ProgramsScreen({onNavigate}){
  const [open,setOpen]=React.useState("01");
  return <>
    <section style={{padding:"58px 40px 40px",maxWidth:700}}>
      <Eyebrow style={{marginBottom:12}}>Our Programs</Eyebrow>
      <SectionHeading size="h1">A World-Class Range of <span style={{color:"var(--text-accent)"}}>Academic Programs</span> for Every Ambition and Passion</SectionHeading>
    </section>
    <section style={{padding:"0 40px 54px"}}>
      {PROGRAMS.map((p,i)=><div key={p.index}>
        <ProgramRow {...p} last={i===PROGRAMS.length-1} onOpen={()=>setOpen(open===p.index?null:p.index)} />
        {open===p.index&&<div style={{display:"grid",gridTemplateColumns:"56px 1fr 1fr",gap:24,padding:"0 0 30px"}}>
          <span />
          <div style={{fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-body)"}}>
            Applications for {p.title.toLowerCase()} study open in September. Entry requirements, fees and college choices differ by course.
          </div>
          <div><Button size="sm" onClick={()=>onNavigate("Admissions")}>How to apply</Button></div>
        </div>}
      </div>)}
    </section>
    <div style={{padding:"0 14px 50px"}}>
      <MediaShowcase image="../../assets/imagery/facility-bodleian.png" eyebrow="Our Facilities" counter="02" total="08" watermark="Library"
        headline="Exceptional Facilities Designed to Support Learning, Research, and Discovery"
        cornerLabel={<>AVAILABLE<br/>FACILITY</>} captionTitle="Bodleian Libraries"
        captionBody="One of the largest and oldest research libraries in Europe, offering access to millions of resources." height={380} />
    </div>
  </>;
}
Object.assign(window,{ProgramsScreen});
