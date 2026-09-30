const {NavBar,Footer,GridLines}=window.DS||{};
const DESIGN_WIDTH=1180;
function Shell({active,onNavigate,children}){
  const [scale,setScale]=React.useState(1);
  const wrap=React.useRef(null);
  React.useEffect(()=>{
    const fit=()=>{const w=wrap.current?wrap.current.clientWidth:DESIGN_WIDTH;setScale(Math.min(1,w/DESIGN_WIDTH));};
    fit();window.addEventListener("resize",fit);return()=>window.removeEventListener("resize",fit);
  },[]);
  return <div ref={wrap} style={{background:"var(--surface-canvas)",minHeight:"100vh",padding:"26px 0 30px",overflowX:"hidden"}}>
    <div style={{width:DESIGN_WIDTH,margin:"0 auto",zoom:scale}}>
    <div style={{background:"var(--surface-page)",borderRadius:"var(--radius-shell)",boxShadow:"var(--shadow-shell)",overflow:"hidden"}}>
      <NavBar active={active} onNavigate={onNavigate} onLogin={()=>onNavigate("Login")} />
      <div style={{position:"relative"}}>
        <GridLines />
        <div style={{position:"relative",zIndex:1}}>{children}</div>
      </div>
      <div style={{padding:"0 14px 14px"}}><Footer /></div>
    </div>
    </div>
  </div>;
}
function Section({eyebrow,children,pad="64px 40px",style}){
  return <section style={{padding:pad,...style}}>{children}</section>;
}
Object.assign(window,{Shell,Section});
