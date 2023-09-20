import { useCallback } from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const onLearnMoreText1Click = useCallback(() => {
    window.open("https://prodcast-notes.netlify.app/");
  }, []);

  const onLearnMoreText2Click = useCallback(() => {
    window.open("https://prodcast-to-do.netlify.app/");
  }, []);

  const onLearnMoreText3Click = useCallback(() => {
    window.open("https://prodcast-timer.netlify.app/");
  }, []);

  const onFrontBtnsClick = useCallback(() => {
    window.open("https://prodcast-login-signup.netlify.app/");
  }, []);

  const onNotesText1Click = useCallback(() => {
    window.open("https://prodcast-notes.netlify.app/");
  }, []);

  const onToDoListText1Click = useCallback(() => {
    window.open("https://prodcast-to-do.netlify.app/");
  }, []);

  const onTimerText1Click = useCallback(() => {
    window.open("https://prodcast-timer.netlify.app/");
  }, []);

  return (
    <div className={styles.homepage}>
      <main className={styles.frame}>
        <section className={styles.frame1}>
          <img
            className={styles.vecteezyGroovyHippie70sBacIcon}
            alt=""
            src="/vecteezy-groovyhippie70sbackgroundswithwavesswirltwirlpattern-9448873-1@2x.png"
          />
        </section>
        <div className={styles.frame2}>
          <div className={styles.bg} />
          <div className={styles.frame3}>
            <img
              className={styles.illustrationIcon}
              alt=""
              src="/illustration@2x.png"
            />
          </div>
          <div className={styles.frame4}>
            <div className={styles.navbar}>
              <div className={styles.logo}>
                <div className={styles.logoChild} />
                <div className={styles.prodcast}>PRODCAST</div>
                <div className={styles.aProductivitySolution}>
                  A PRODUCTIVITY SOLUTION
                </div>
              </div>
              <div className={styles.navbarType}>
                <div className={styles.home}>Home</div>
                <div className={styles.resources}>Resources</div>
                <div className={styles.contact}>Contact</div>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.pricing}>Pricing</div>
              </div>
              <div className={styles.navBtns}>
                <div className={styles.loginBtn}>
                  <div className={styles.signUp}>Sign Up</div>
                </div>
                <div className={styles.loginBtn1}>
                  <div className={styles.login}>Login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.frame5}>
        <div className={styles.frame6}>
          <div className={styles.front1}>
            <div className={styles.beProductiveWhileContainer}>
              <span className={styles.beProductiveWhileContainer1}>
                Be Productive while you wor
                <span className={styles.k}>k</span>
              </span>
            </div>
            <div className={styles.prodcast1}>PRODCAST</div>
            <img className={styles.front1Child} alt="" src="/line-2.svg" />
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
          </div>
        </div>
        <div className={styles.frame7}>
          <div className={styles.section1}>
            <b className={styles.ourCoolApps}>OUR COOL APPS</b>
            <div className={styles.news}>
              <div className={styles.news1}>News</div>
              <img className={styles.newsChild} alt="" src="/rectangle-6.svg" />
              <div className={styles.aNewsAppContainer}>
                <p className={styles.aNewsAppWhichKeeps}>
                  <span className={styles.a}>{`A `}</span>
                  <span className={styles.news2}>News</span>
                  <span>{` App which keeps `}</span>
                </p>
                <p
                  className={styles.aNewsAppWhichKeeps}
                >{`the users Informed Without `}</p>
                <p className={styles.aNewsAppWhichKeeps}>
                  All The Doom scrolling.
                </p>
              </div>
              <div className={styles.learnMore}>Learn More</div>
              <img
                className={styles.newspaperIcon}
                alt=""
                src="/newspaper.svg"
              />
            </div>
            <div className={styles.notes}>
              <img className={styles.newsChild} alt="" src="/rectangle-6.svg" />
              <div className={styles.notes1}>Notes</div>
              <div className={styles.aNotesAppContainer}>
                <p className={styles.aNewsAppWhichKeeps}>
                  <span className={styles.a}>{`A `}</span>
                  <span className={styles.news2}>Notes</span>
                  <span>{` App which helps `}</span>
                </p>
                <p
                  className={styles.aNewsAppWhichKeeps}
                >{`the students to write imp `}</p>
                <p className={styles.aNewsAppWhichKeeps}>
                  notes while studying.
                </p>
              </div>
              <div
                className={styles.learnMore1}
                onClick={onLearnMoreText1Click}
              >
                Learn More
              </div>
              <img className={styles.notesIcon} alt="" src="/notes.svg" />
            </div>
            <div className={styles.todo}>
              <div className={styles.toDoList}>To-do List</div>
              <img className={styles.todoChild} alt="" src="/rectangle-6.svg" />
              <div className={styles.aNewsAppContainer}>
                <p
                  className={styles.aNewsAppWhichKeeps}
                >{`Now no need to remember the `}</p>
                <p className={styles.aNewsAppWhichKeeps}>
                  <span>{`tasks, use the `}</span>
                  <span className={styles.toDo}>To-do</span>
                  <span className={styles.a}>{` App to `}</span>
                </p>
                <p className={styles.aNewsAppWhichKeeps}>
                  make a checklist of your tasks.
                </p>
              </div>
              <div
                className={styles.learnMore2}
                onClick={onLearnMoreText2Click}
              >
                Learn More
              </div>
              <img className={styles.todoIcon} alt="" src="/todo.svg" />
            </div>
            <div className={styles.radio}>
              <div className={styles.radioChild} />
              <div className={styles.timer}>Timer</div>
              <img className={styles.radioItem} alt="" src="/rectangle-6.svg" />
              <div className={styles.wantToTrackContainer}>
                <p
                  className={styles.aNewsAppWhichKeeps}
                >{`Want to track your time? Here’s `}</p>
                <p className={styles.aNewsAppWhichKeeps}>
                  <span className={styles.a}>{`the `}</span>
                  <span className={styles.toDo}>Timer</span>
                  <span>{` App with stopwatch `}</span>
                </p>
                <p className={styles.aNewsAppWhichKeeps}>
                  feature which lets you track
                </p>
                <p className={styles.aNewsAppWhichKeeps}> your time.</p>
              </div>
              <div
                className={styles.learnMore3}
                onClick={onLearnMoreText3Click}
              >
                Learn More
              </div>
              <img className={styles.timerIcon} alt="" src="/timer.svg" />
            </div>
            <b className={styles.b}>😎</b>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.section2}>
            <div className={styles.contentRect} />
            <img
              className={styles.frontBtnsIcon}
              alt=""
              src="/front-btns.svg"
              onClick={onFrontBtnsClick}
            />
            <img className={styles.front2Icon} alt="" src="/front-2.svg" />
            <img
              className={styles.whatWeDoIllustration}
              alt=""
              src="/what-we-do-illustration@2x.png"
            />
          </div>
        </div>
        <div className={styles.frame9}>
          <div className={styles.connect}>
            <div className={styles.frame10}>
              <div className={styles.socialBtns}>
                <div className={styles.twitter}>
                  <img
                    className={styles.pxTwitterBirdLogo20121Icon}
                    alt=""
                    src="/1200pxtwitter-bird-logo-2012-1@2x.png"
                  />
                </div>
                <div className={styles.fb}>
                  <img
                    className={styles.facebookIcon1}
                    alt=""
                    src="/2021-facebook-icon-1@2x.png"
                  />
                </div>
                <div className={styles.insta}>
                  <img
                    className={styles.instagramLogo20161Icon}
                    alt=""
                    src="/instagram-logo-2016-1@2x.png"
                  />
                </div>
                <div className={styles.yt}>
                  <img
                    className={styles.youtubeFullColorIcon2017}
                    alt=""
                    src="/youtube-fullcolor-icon-2017-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <div className={styles.frame11}>
              <div className={styles.connectWithUsContainer}>
                <span className={styles.beProductiveWhileContainer1}>
                  <span>{`Connect `}</span>
                  <span className={styles.a}>with US!</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame12}>
          <div className={styles.section3}>
            <div className={styles.prodcastIsAContainer}>
              <p className={styles.aNewsAppWhichKeeps}>
                <span className={styles.toDo}>ProdCast</span>
                <span>{` is a productivity enhancing `}</span>
              </p>
              <p
                className={styles.aNewsAppWhichKeeps}
              >{`website for students where they learn `}</p>
              <p className={styles.aNewsAppWhichKeeps}>
                without all the doom scrolling.
              </p>
            </div>
            <div className={styles.ifYouHaveContainer}>
              <p className={styles.aNewsAppWhichKeeps}>
                <span>If you have any</span>
                <span className={styles.toDo}> Doubt</span>
              </p>
              <p className={styles.aNewsAppWhichKeeps}>
                Feel free to let us know at
              </p>
              <p className={styles.prodcastgmailcom}>prodcast@gmail.com</p>
            </div>
            <b className={styles.about}>About</b>
            <b className={styles.quickLinks}>Quick Links</b>
            <b className={styles.resources1}>Resources</b>
            <div className={styles.news3}>News</div>
            <div className={styles.github}>GitHub</div>
            <div className={styles.notes3} onClick={onNotesText1Click}>
              Notes
            </div>
            <div className={styles.coursera}>Coursera</div>
            <div className={styles.toDoList1} onClick={onToDoListText1Click}>
              To-Do List
            </div>
            <div className={styles.udemy}>Udemy</div>
            <div className={styles.timer2} onClick={onTimerText1Click}>
              Timer
            </div>
            <b className={styles.text}>{` `}</b>
            <img className={styles.gmailIcon} alt="" src="/gmail.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
