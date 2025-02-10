

const Skills=()=>{
  const techs=[
    {
        title:'Vanilla JS',
        img:'js.png'
    },
    {
      title:'React',
      img:'React.png'
    },
    {
      title:'Node.js',
      img:'Node.js.png'
    },
    {
      title:'MongoDB',
      img:'MongoDB.png'
    },
    {
      title:'Next.js',
      img:'Next.js.png'
    },
    {
      title:'Tailwind CSS',
      img:'tailwind.png'
    },
    {
      title:'Git',
      img:'Git.png'
    },
    {
      title:'Figma',
      img:'Figma.png'
    },
    ]
    return(
        <div className="container"> 
            <section id="skills" className="text-center">
            <h2>Skills</h2>
            <h4 className="text-center mb-4"> My expertise</h4>
            <div className="row pb-4 pt-4">
              {
                techs.map((tech)=>{
return(
  <div className="skill col-md-3 col-6">
  <div>
  <img src={tech.img} alt="skill"/>
  </div>
  <h6>{tech.title}</h6>
</div>
)
                })
              }
          
  
          </div>
            </section>
        </div>
    )
}
export default Skills;