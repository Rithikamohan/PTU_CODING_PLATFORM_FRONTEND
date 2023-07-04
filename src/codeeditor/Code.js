import { useState, useEffect } from "react";
import axios from "axios";
//import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import Editor from "@monaco-editor/react";
import stubs from "./defaultStubs";
import "./Code.css";
import stuService from ".././services/stu.service";
import empService from "../Codeproblems/code.service";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { Language } from "@mui/icons-material";
import ReactConfetti from 'react-confetti'

const editorOptions = {
  scrollBeyondLastLine: false,
  fontSize: "20px",
  folding: false,
  //lineDecorationsWidth: 15,
};
const inputOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fontSize: "20px",
  lineDecorationsWidth: 5,
  readOnly: true,
};
const outputOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fontSize: "20px",
  lineDecorationsWidth: 5,
};

function Code(props) {
  if (localStorage.Token) {
    authToken(localStorage.Token);
  }

  const [timeLeft, setTimeLeft] = useState(2700);

  const [total, setTotal] = useState();
  //c
  const [cmark, setcmark] = useState("");
  const [beforecmark, setBeforecmark] = useState("");
  //cbasic
  const [cmarkb, setcmarkb] = useState("");
  const [beforecmarkb, setBeforecmarkb] = useState("");

  //cinter
  const [cmarki, setcmarki] = useState("");
  const [beforecmarki, setBeforecmarki] = useState("");

  //cadv
  const [cmarka, setcmarka] = useState("");
  const [beforecmarka, setBeforecmarka] = useState("");

  //cplus
  const [beforecplusmark, setBeforecplusmark] = useState("");
  const [beforemark, setBeforemark] = useState("");

  //cplusbasic
  const [cpmarkb, setcpmarkb] = useState("");
  const [beforecpmarkb, setBeforecpmarkb] = useState("");

  //cplusinter
  const [cpmarki, setcpmarki] = useState("");
  const [beforecpmarki, setBeforecpmarki] = useState("");

  //cplusadv
  const [cpmarka, setcpmarka] = useState("");
  const [beforecpmarka, setBeforecpmarka] = useState("");

  //cplus end

//python

  const [pymark, setpymark] = useState("");
  const [beforepymark, setBeforepymark] = useState("");
 
  //cbasic
  const [pymarkb, setmarkpyb] = useState("");
  const [beforepyb, setBeforepyb] = useState("");

  //cinter
  const [pyi, setpyi] = useState("");
  const [beforepyi, setBeforepyi] = useState("");

  //cadv
  const [pya, setpya] = useState("");
  const [beforepya, setBeforepya] = useState("");

//assessment
const[assessmentmark,SetAsmark] =useState("");

  //const auth = useSelector((state) => state.auth);
  const username = window.localStorage.getItem("stuusername");
  let uname = username;
  //console.log(uname);
  const [num, setNum] = useState(1);
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [empList, setEmpList] = useState([]);
  const [input, setInput] = useState("//predefined Testcases");
  const [level, setLevel] = useState("basic");

  const [testcase, setTestcase] = useState("");
  useEffect(() => {

    deleteEmp(uname);
    getC(uname);
    //c
    getCbasicfun(uname);
    getCinterfun(uname);
    getCadvfun(uname);
    //cplus
    getCpbasicfun(uname);
    getCpinterfun(uname);
    getCpadvfun(uname);
    getCplus(uname);
    //py
    getpybasicfun(uname);
    getPyinterfun(uname);
    getPyadvfun(uname);
    getpy(uname);
  }, []);

  const init = () => {
    empService
      .getAllEmp()
      .then((res) => {
        let question;
        let tc;
        setNum(randomNumberInRange(1, res.data.length));
        for (let i = 0; i <= res.data.length; i++) {
          let item = res.data[i];

          let type = item.codetype;
          let cid = item.id;

          if (type === level && cid === num) 
          {
            // console.log(item.testcase1);
            // console.log(item.question);
            question = item;
            tc = item.testcase1;
            setTestcase(tc);
            break;
          }
        }
        //res.data=question;
        setEmpList(question);
        setInput(tc);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cplus = () => {
    empService
      .getAllCplus()
      .then((res) => {
        let question;
        let tc;
        setNum(randomNumberInRange(1, res.data.length));
        for (let i = 0; i <= res.data.length; i++) {
          let item = res.data[i];
          let type = item.codetype;
          let cid = item.id;
          if (type === level && cid === num) {
            question = item;
            tc = item.testcase;
            setTestcase(tc);
            break;
          }
        }
        //res.data=question;
        setEmpList(question);
        setInput(tc);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //python init
  const pyinit = () => {
    empService
      .getAllPy()
      .then((res) => {
        let question;
        let tc;
        setNum(randomNumberInRange(1, res.data.length));
        for (let i = 0; i <= res.data.length; i++) {
          let item = res.data[i];

          let type = item.codetype;
          let cid = item.id;

          if (type === level && cid === num) {
            question = item;

            tc = item.testcase;
            setTestcase(tc);
            break;
          }
        }
        //res.data=question;
        setEmpList(question);
        setInput(tc);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //total
  const setMark = (uname, points) => {
    stuService
      .setMark(points, uname)
      .then((res) => {
        console.log("c points " + res.data);
        setTotal(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //c
  const setC = (uname, points) => {
    stuService
      .setC(points, uname)
      .then((res) => {
        console.log("cmark  after increment" + res.data);
        setTotal(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getC = (name) => {
    stuService
      .getC(name)
      .then((res) => {
        console.log("c name" + name);
        setBeforecmark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //cbasic

  const setCbasicfun = (uname, cmarki) => {
    stuService
      .setCbasic(cmarki, uname)
      .then((res) => {
        // console.log("c basic mark "+ res.data);
        setcmarkb(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCbasicfun = (name) => {
    stuService
      .getCbasic(name)
      .then((res) => {
        // console.log("c basic before mark"+res.data);
        setBeforecmarkb(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cinter

  const setCinterfun = (uname, points) => {
    console.log("inside func");
    stuService
      .setCinter(points, uname)
      .then((res) => {
        console.log("c inter mark in func" + res.data);
        setcmarki(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCinterfun = (name) => {
    stuService
      .getCinter(name)
      .then((res) => {
        console.log("c inter before mark" + res.data);
        setBeforecmarki(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cadv

  const setCadvfun = (uname, points) => {
    stuService
      .setCadv(points, uname)
      .then((res) => {
        console.log("c adv mark in func" + res.data);
        setcmarka(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCadvfun = (name) => {
    stuService
      .getCadv(name)
      .then((res) => {
        console.log("c adv before mark" + res.data);
        setBeforecmarka(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cplus
  const setCplus = (uname, points) => {
    stuService
      .setCplus(points, uname)
      .then((res) => {
        console.log("c plus mark " + res.data);
        setTotal(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCplus = (name) => {
    stuService
      .getCplus(name)
      .then((res) => {
        console.log("c plusbefore mark" + res.data);
        setBeforecplusmark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cpbasic
  const setCpbasicfun = (uname, cmarki) => {
    stuService
      .setCpbasic(cmarki, uname)
      .then((res) => {
        setcpmarkb(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCpbasicfun = (name) => {
    stuService
      .getCpbasic(name)
      .then((res) => {
        setBeforecpmarkb(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cpinter
  const setCpinterfun = (uname, cmarki) => {
    stuService
      .setCpinter(cmarki, uname)
      .then((res) => {
        setcpmarki(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCpinterfun = (name) => {
    stuService
      .getCpinter(name)
      .then((res) => {
        setBeforecpmarki(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //cadv

  const setCpadvfun = (uname, points) => {
    stuService
      .setCpadv(points, uname)
      .then((res) => {
        //console.log("c adv mark in func"+ res.data);
        setcpmarka(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCpadvfun = (name) => {
    stuService
      .getCpadv(name)
      .then((res) => {
        //console.log("c adv before mark"+res.data);
        setBeforecpmarka(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//python

  const setpy = (uname, points) => {
    stuService
      .setPy(points, uname)
      .then((res) => {
        console.log("Python mark " + res.data);
        setpymark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getpy = (name) => {
    stuService
      .getPy(name)
      .then((res) => {
        console.log(" Python before mark" + res.data);
        setBeforepymark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //pybasic
  const setpybasicfun = (uname, cmarki) => {
    stuService
      .setPybasic(cmarki, uname)
      .then((res) => {
        setmarkpyb(res.data);
        console.log("after mark in py"+res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getpybasicfun = (name) => {
    stuService
      .getPybasic(name)
      .then((res) => {
        setBeforepyb(res.data);
        console.log("before mark in py"+res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //pyinter
  const setpyinterfun = (uname, cmarki) => {
    stuService
      .setPyinter(cmarki, uname)
      .then((res) => {
        setpyi(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPyinterfun = (name) => {
    stuService
      .getPyinter(name)
      .then((res) => {
        setBeforepyi(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //pyadv

  const setpyadvfun = (uname, points) => {
    stuService
      .setPyadv(points, uname)
      .then((res) => {
        //console.log("c adv mark in func"+ res.data);
        setpya(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getPyadvfun = (name) => {
    stuService
      .getPyadv(name)
      .then((res) => {
        //console.log("c adv before mark"+res.data);
        setBeforepya(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get before total
  const deleteEmp = (name) => {
    stuService
      .getMark(name)
      .then((res) => {
        console.log("before mark" + res.data);
        setBeforemark(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//setAssessment mark
const setassessment = (uname, assessmentmark) => {
  stuService
    .setassessment(assessmentmark, uname)
    .then((res) => {
      //assessmentmark,SetAsmark
     console.log("mark inserted successfully for assessment");
    })
    .catch((error) => {
      console.log(error);
    });
};

//part2

//tc passed notifications code
const[isCodePassed, setIsCodePassed]=useState(false);
const toastMsg = () => {
  toast.success('Testcase passed successfully!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  });
};
useEffect(() => {
  if (isCodePassed) {
    setBtn(true);
toastMsg();
    const redirectTimeout = setTimeout(() => {
      props.history.push("/home");
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }
}, [isCodePassed]);

//confetti design code
const [windowDimension, setDimension] = useState({width: window.innerWidth,height: window.innerHeight });
const [Btn, setBtn] = useState(false)
const detectSize =() =>{
    setDimension({width: window.innerWidth,height: window.innerHeight });
}
useEffect(() =>{
  window.addEventListener('resize', detectSize);
  return () =>{
      window.removeEventListener('resize', detectSize);
  }
}, [windowDimension]);
//end confetti design code

  const [language, setLanguage] = useState("cpp");
  const [langmark, setLangmark] = useState();
  const [aquestion, setAquestion] = useState("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [jobId, setJobId] = useState("");
  const [jobDetails, setJobDetails] = useState(null);
  const [editorMode, setEditorMode] = useState("vs-light");
  const [languageIcon, setLanguageIcon] = useState("./resources/cpp.png");
  const { state } = useLocation();
  const timer = setTimeout(() => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000); 
 const [mode, setMode] =useState("");
  useEffect(() => {
    let lang = state.lang;
    setLangmark(lang);
    console.log("lang in practice is ",lang);
    let modes=state.mode;
    setMode(modes);
    let aqn=state.question;
    setAquestion(aqn);
    let testcases=state.testcases;
    setInput(testcases);
if(mode === "assessment")
{    let alang=state.alang;
    setLangmark(alang);
    console.log("alang is ", alang);
    console.log("mode is ", modes);
    console.log("question is ", aqn);
    console.log("testcases is ", testcases);
}
else{
  console.log("in practice mode");
}
    // console.log("lang is ", lang);
    if (lang === "c") {
      init();
    } else if (lang === "cpp") {
      cplus();
    } else if (lang === "python") {
      pyinit();
    }
    setCode(stubs[language]);
    setOutput("// output");
    setLanguageIcon(`./resources/${language}.png`);
    
  }, [language]);
  useEffect(() => {
    if(mode === "assessment")
    {
      
    // Start the countdown when the component mounts
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000); // Run every second
  }
  else{
    clearTimeout(timer);
  }
    // Clean up the timer when the component unmounts or when timeLeft reaches 0
    return () => clearTimeout(timer);
  }, [timeLeft]);
  useEffect(() => {
    if(mode === "assessment")
    {
    if (timeLeft === 0) {
      // Perform the redirect here
      // Example: redirect to '/another-page'
      window.location.href = '/home';
    }
  }
  }, [timeLeft]);
  const toggleTheme = (idName) => {
    let currentClassName = document.getElementById(idName).className;
    let newClassName = currentClassName;
    if (currentClassName === idName + "-dark") newClassName = idName + "-light";
    else newClassName = idName + "-dark";
    document.getElementById(idName).className = newClassName;
  };

  const handleThemeChange = () => {
    if (editorMode === "vs-light") setEditorMode("vs-dark");
    else setEditorMode("vs-light");
    toggleTheme("App");
    toggleTheme("header");
    toggleTheme("app-name");
    toggleTheme("language-button");
    const themeToggler = document.getElementById("theme-icon");
    let classNames = themeToggler.classList;
    if (classNames.contains("theme-icon-light")) {
      classNames.replace("theme-icon-light", "theme-icon-dark");
      classNames.replace("fa-sun", "fa-moon");
    } else {
      classNames.replace("theme-icon-dark", "theme-icon-light");
      classNames.replace("fa-moon", "fa-sun");
    }
  };

  const handleRefresh = async () => {
    if(langmark==="c"){
    init();
    }
    else if(langmark==="cpp"){
      cplus();
    }
    else{
      pyinit();
    }
  };
  const handleSubmit = async () => {
    const payload = {
      language: language,
      code: code,
      input: input,
    };

    try {
      setJobId("");
      setStatus("Running");
      setJobDetails(null);
      setOutput(`Code Execution Status: Running`);
      const { data } = await axios.post("http://localhost:5000/run", payload);
      console.log("data", data);
      setJobId(data.jobId);
      let ids = data.jobId;
      setJobId(ids);
      console.log(ids);
      let intervalId;
      //https://code-compilation.onrender.com/run
      //http://localhost:5000/run
      intervalId = setInterval(async () => {
        setStatus("Running");
        setOutput(`Code Execution Status: Run `);
        console.log("inside setInterval", ids);
        const { data: dataRes } = await axios.get(
          "http://localhost:5000/status",
          { params: { id: ids } }
        );
        const { success, job, error } = dataRes;
        if (success) {
          setJobDetails(job);
          const { status: jobStatus, output: jobOutput } = job;
          setStatus(jobStatus);

          if (jobStatus === "Success") {
//assessmentmark
            if(mode === "assessment" && langmark === "clang"){
              console.log("inside ass if");
              if(jobOutput !== input)
              {
                setOutput(`test cased  not passed  in assessment output is  ${jobOutput} ${testcase}`);
              console.log(jobOutput)
              console.log(input);
              }
              else{
                setOutput(`tc  passed ${input}`);
                let m=0;
                m=m+20;
                SetAsmark(m)
                setassessment(uname,m)

              }
            }
            
//practice
            if (langmark === "c" && mode != "assessment" || langmark === "cpp" && mode != "assessment") {
              // console.log(testcase == parseInt(jobOutput));
              if (jobOutput !== testcase) {
                setOutput(`test cased  not passed  in c output is   ${jobOutput}`);
                //console.log(testcase, parseInt(jobOutput));
              } else {
                setOutput(`tc  passed ${testcase}`);
            
             
                let m = 0;
                //c lang
                if (langmark === "c"  && mode != "assessment" ) {
                  if (level === "basic") {
                    m++;
                    let fmark = m + beforecmark;
                    console.log("final c mark" + fmark);
                    let bmark = m + beforecmarkb;
                    setcmarkb(bmark);
                    setCbasicfun(uname, bmark);
                    setC(uname, fmark);
                  } else if (level === "intermediate") {
                    //total mark for c lang
                    let fmark = m + 5 + beforecmark;
                    setcmark(fmark);

                    //total mark for intermediate level in c
                    let bmark = m + 5 + beforecmarki;
                    setcmarki(bmark);
                    console.log("cmark in intermediate cond", bmark);
                    setCinterfun(uname, bmark);
                    setC(uname, fmark);
                  } else {
                    let fmark = m + 10 + beforecmark;
                    setcmark(fmark);

                    let bmark = m + 10 + beforecmarka;
                    setcmarka(bmark);
                    setCadvfun(uname, bmark);
                    setC(uname, fmark);
                  }
                }
                //cplus
                else if (langmark === "cpp"  && mode != "assessment" ) {
                  if (level === "basic") {
                    m++;
                    let fmark = m + beforecplusmark;
                    console.log("final mark" + fmark);
                    setCplus(uname, fmark);
                    let bmark = m + beforecpmarkb;
                    setcpmarkb(bmark);
                    setCpbasicfun(uname, bmark);
                  } else if (level === "intermediate") {
                    let fmark = m + 5 + beforecplusmark;
                    setCplus(uname, fmark);

                    //total mark for intermediate level in c
                    let bmark = m + 5 + beforecpmarki;
                    setcpmarki(bmark);
                    setCpinterfun(uname, bmark);
                  } else {
                    let fmark = m + 10 + beforecplusmark;
                    setCplus(uname, fmark);
                    let bmark = m + 10 + beforecpmarka;
                    setcpmarka(bmark);
                    setCpadvfun(uname, bmark);
                  }
                }
                //props.history.push("/home");
                setIsCodePassed(true);
                console.log(m);
              } //else tc passed
            } //c and cpp if
            else if (langmark === "python"  && mode != "assessment" ) {
                
              console.log("lang is python");
               const outputs = parseInt(jobOutput);
              if (parseInt(jobOutput) != testcase) {
                setOutput(`test cased not passed output is   ${jobOutput}`);
                console.log(testcase, outputs,  jobOutput);
              }
              if(jobOutput.trim()!==testcase)
              {
                setOutput(`test case in else if not passed output is   ${jobOutput}`);
                console.log(testcase, outputs,  jobOutput);
     
              } else {
                setOutput(`tc  passed ${testcase}`);
                let m = 0;



                //py lang
                if (level === "basic") {
                  //console.log("py basic");
                  m++;
                    let fmark = m + beforepymark;
                    console.log("final py mark" + fmark);
                    let bmark = m + beforepyb;
                    console.log("final py basc mark" + bmark);
                    setmarkpyb(bmark);
                    setpybasicfun(uname, bmark);
                    setpy(uname, fmark);
                } else if (level === "intermediate") {
                 //total mark for py lang
                 let fmark = m + 5 + beforepymark;
                 setpy(fmark);

                 //total mark for intermediate level in c
                 let bmark = m + 5 + beforepyi;
                 setpyi(bmark);
                 console.log("py in intermediate ", bmark);
                 setpyinterfun(uname, bmark);
                 setpy(uname, fmark);
                } else {
                  let fmark = m + 10 + beforepymark;
                  setpy(uname, fmark);
                  let bmark = m + 10 + beforepya;
                  setpya(bmark);
                  setpyadvfun(uname, bmark);
                }
               // props.history.push("/home");
               setIsCodePassed(true);
                console.log(m);
              } //else of tc passed in py
            } 
            else{
              console.log("no lang selected");
            }//else of c and cpp if
          } //if succcess
        
          else {
            const errorObject = JSON.parse(jobOutput);
            setOutput(
              `Code Execution Status: ${jobStatus}\n${errorObject.stderr}`
            );
          }
          clearInterval(intervalId);
        } else {
          console.log(dataRes);
          setStatus("Error !!! ");
          console.error(error);
          setOutput(error);
          clearInterval(intervalId);
        }
      }, 1000);
    } catch ({ response }) {
      if (response) {
        const errorMessage = response.data.err.stderr;
        setOutput(errorMessage);
      } else {
        setOutput("Error connecting to server!");
      }
    }
  };
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <div id="App" className="App-light">
      {Btn && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
tweenDuration={1000}
        />}
      <div id="header" className="header-light">
        <h3 id="app-name" className="app-name-light">
          <i className="fas fa-solid fa-cube" aria-hidden="true"></i>
          &nbsp; PTU CODE EDITOR
        </h3>

        <div className="nav-right-options">
          <i
            id="theme-icon"
            className="fas fa-solid fa-sun fa-2x nav-icons theme-icon-light"
            aria-hidden="true"
            onClick={handleThemeChange}
          ></i>
        </div>
      </div>
      <div className="secondary-nav-items">
        <button className="btn logo-btn" disabled={true}>
          <img
            src={require(`${languageIcon}`)}
            className="image"
            alt={`${language} icon`}
          />
        </button>
        <button id="language-button" className="language-button-dark">
          <select
            value={level}
            onChange={(e) => {
              setStatus("");
              setJobDetails(null);
              setLevel(e.target.value);
              //setCode(stubs[e.target.value]);
              // setLanguageIcon(`./resources/${language}.png`);
            }}
          >
            <option value={"basic"}>Basic</option>
            <option value={"intermediate"}>Intermediate </option>
            <option value={"adv"}>Advanced </option>
          </select>
        </button>

        <button
          id="language-button"
          className="language-button-dark"
          style={{ marginLeft: ".5rem", marginRight: ".10rem" }}
        >
          <select
            value={language}
            onChange={(e) => {
              setStatus("");
              setJobDetails(null);
              setLanguage(e.target.value);
              setCode(stubs[e.target.value]);
              setLanguageIcon(`./resources/${language}.png`);
            }}
          >
            <option value={"cpp"}>C </option>
            <option value={"python"}>Python</option>
            <option value={"cpp"}>C++ </option>
          </select>
        </button>

        {/* run button */}
        <button className="btn-runn run-btn" onClick={handleSubmit}>
          <i className="fas fa-play fa-fade run-icon" aria-hidden="true"></i>
          &nbsp; Run
        </button>

        <button className="btn-runn run-btn" onClick={handleRefresh}>
          <i className="fas fa-play fa-fade run-icon" aria-hidden="true"></i>
          &nbsp; refresh
        </button>
        
        {mode === 'assessment' && <p className="timeleft" style={{fontSize:"20px"}}><b>Time Left: {minutes}:{seconds < 10 ?`0${seconds}`: seconds} minutes</b></p>}
      </div>

      <div className="std-qn">
        <h4>Question</h4>
        {mode === 'assessment' && <h3 className="h3">{aquestion}</h3>}
        <h3 className="h3">{empList.question}</h3>
      </div>
      <div className="edit">
        <Editor
          height="100%"
          width="100%"
          theme={editorMode}
          defaultLanguage={language}
          defaultValue={code}
          value={code}
          onChange={(e) => setCode(e)}
          options={editorOptions}
          language={language}
        />
      </div>
      <div className="std-input-output">
        <div className="std-input">
          <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={input}
            value={input}
            options={inputOptions}
            // onChange={(e) => setInput(e)}
          />
        </div>
        <div className="std-output">
          <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={"// output"}
            value={output}
            options={outputOptions}
          />
        </div>
        <ToastContainer />
      </div>
      <br />
    </div>
  );
}

export default Code;



