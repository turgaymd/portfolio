

const Skills=()=>{
  const techs=[
    {
      id:1,
      title:'Vanilla JS',
      img:'js.png'
    },
    {
      id:2,
      title:'React',
      img:'React.png'
    },
    {
      id:3,
      title:'Node.js',
      img:'Node.js.png'
    },
    {
      id:4,
      title:'MongoDB',
      img:'MongoDB.png'
    },
    {
      id:5,
      title:'Next.js',
      img:'Next.js.png'
    },
    {
      id:6,
      title:'Tailwind CSS',
      img:'tailwind.png'
    },
    {
      id:7,
      title:'Git',
      img:'Git.png'
    },
    {
      id:8,
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
  <div className="skill col-md-3 col-6" key={tech.id}>
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