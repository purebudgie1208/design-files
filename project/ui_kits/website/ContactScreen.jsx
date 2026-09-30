const {Eyebrow,SectionHeading,FormField,Input,PhoneInput,Select,Textarea,Button}=window.DS||{};
function ContactScreen(){
  const [v,setV]=React.useState({first:"",last:"",email:"",phone:"",subject:"",message:""});
  const [sent,setSent]=React.useState(false);
  const set=k=>e=>setV({...v,[k]:e.target.value});
  return <section style={{padding:"58px 40px 70px",display:"grid",gridTemplateColumns:"1fr 1.35fr",gap:52,alignItems:"start"}}>
    <div>
      <Eyebrow style={{marginBottom:12}}>Contact Us</Eyebrow>
      <SectionHeading size="h1">Have Questions? We'd Love to Hear From You.</SectionHeading>
      <p style={{marginTop:22,maxWidth:280,fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-muted)"}}>
        Whether you're interested in admissions, partnerships, or general enquiries, use the form below and we'll get back to you promptly.</p>
    </div>
    <div style={{background:"var(--surface-sunken)",borderRadius:"var(--radius-lg)",padding:26,display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
      <FormField label="First name"><Input value={v.first} onChange={set("first")} placeholder="Enter your first name" /></FormField>
      <FormField label="Last name"><Input value={v.last} onChange={set("last")} placeholder="Enter your last name" /></FormField>
      <FormField label="Email"><Input value={v.email} onChange={set("email")} placeholder="Your email address" /></FormField>
      <FormField label="Phone Number"><PhoneInput value={v.phone} onChange={set("phone")} /></FormField>
      <FormField label="Subject" span={2}><Select value={v.subject} onChange={set("subject")} placeholder="Select your subject" options={["Admissions","Research partnership","Press office","Alumni","Other"]} /></FormField>
      <FormField label="Message" span={2}><Textarea value={v.message} onChange={set("message")} rows={6} placeholder="Type your message" /></FormField>
      <div style={{gridColumn:"span 2",display:"flex",alignItems:"center",gap:16}}>
        <Button onClick={()=>setSent(true)}>Send Message</Button>
        {sent&&<span style={{fontSize:"var(--fs-body)",color:"var(--text-muted)"}}>Thank you — we'll be in touch shortly.</span>}
      </div>
    </div>
  </section>;
}
Object.assign(window,{ContactScreen});
