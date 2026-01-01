import { FaGithub,FaHackerrank,FaLinkedinIn,} from "react-icons/fa";
const Home = () => {
  return (
    <div className="admin">
      <p className="greeting">Hi, I am</p>
      <div className="typewriter">
        <h1>Turgay Mammadov  </h1>
        <h2>Front-end developer </h2>
      </div>
      <div className="social pt-2">
        <a className="text-white" href="https://github.com/turqay667">
          <FaGithub />
        </a>
        <a
          className="text-white"
          href="https://www.hackerrank.com/profile/memmedovturqay81"
        >
          <FaHackerrank />
        </a>
        <a
          className="text-white"
          href="https://www.linkedin.com/in/turgay-mammadov/"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* <div className="admin_social col-md-8">
<a className="text-white" href="https://github.com/turqay667"><FaGithub /></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>
<a className="text-white" href="https://www.hackerrank.com/profile/memmedovturqay81"><FaHackerrank /></a>
</div> */}
    </div>
  );
};
export default Home;
