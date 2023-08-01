import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import Header from "../modules/first/components/header";
import CloseBtn from "../imgs/new/close-btn.svg";
import ArrowDown from "../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../modules";

const FAQ = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleMobileMenu = (e) => {
    e?.preventDefault();
    const html = document.documentElement;
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("root").classList.toggle("mobileMenu");
    html.style.overflow === "hidden"
      ? (html.style.overflow = "auto")
      : (html.style.overflow = "hidden");
  };

  const buttons = [
    {
      title: "Gameplay",
      links: [
        {
          title: "Backstory",
          link: "/main/#backstory",
          type: "scroll",
        },
        {
          title: "ChainVerse",
          link: "/main/#chainverse",
          type: "scroll",
        },
        {
          title: "Characters",
          link: "/main/#characters",
          type: "scroll",
        },
        {
          title: "Activities",
          link: "/main/#activities",
          type: "scroll",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          link: "https://discord.gg/AABG2mJZAp",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/ChainJoes",
        },
        {
          title: "Telegram",
          link: "https://t.me/chainjoes",
        },
      ],
    },
    {
      title: "Roadmap",
      link: "/main/#roadmap",
      type: "scroll",
    },
    {
      title: "Team",
      link: "/main/#team",
      type: "scroll",
    },
    {
      title: "Partners",
      link: "/main/#partners",
      type: "scroll",
    },
    {
      title: "Roadmap",
      link: "/main/#roadmap",
      type: "scroll",
    },
    {
      title: "Help",
      links: [
        {
          title: "FAQ ",
          link: "/faq",
        },
        {
          title: "GitBook",
          link: "https://chainjoes.gitbook.io/chainjoes/",
        },
        {
          title: "Whitepaper",
          link: "/pdfs/Whitepaper.pdf",
        },
        {
          title: "Tokenomics",
          link: "/pdfs/Tokenomics.pdf",
        },
        {
          title: "Sale Strategy",
          link: "/pdfs/Sale_Strategy.pdf",
        },
        {
          title: "One Page",
          link: "/pdfs/One_Page.pdf",
        },
      ],
    },
    {
      title: "News",
      link: "https://medium.com/@ChainJoes",
    },
  ];

  const faq = [
    {
      title: "What is Сhain Joes? ",
      description: (
        <>
          Chain Joes is a mobile Isometric Action Shooter created under the
          guidance of an AAA game studio and blockchain and marketing
          professionals. Our game is designed to deliver the best gameplay based
          on the web3 enemies concepts, including Scammers, Spammers, and
          Hackers.
          <br />
          <br />
          In addition to the classic PVP mode, where the ranked match function
          will be available, we have specially made a funny and fun concept for
          our PVE mode in the game. In our Chain Joes mobile game, everything is
          from the real web3, so the villains in it are Hackers, Spammers, and
          Scammers! Gamers will have to fight them, protecting the DAO from
          their attempts to steal our assets, spam our mail or try to sell you
          shit coins. We will expose them together and clear the DAO of all
          threats!
          <br />
          <br />
          All this will be relevant to the current state of the market! Imagine
          enemies with the face of Samuel Bankman-Fried, who attack the
          metaverse and try to block your wallets. Time to fight back and kick
          their asses!
        </>
      ),
    },
    {
      title: "What is the difference between your project and others?",
      description: (
        <>
          Forget about P2E. We are building a top-notch game with interesting
          gameplay concepts and a new PLAY-AND-EARN model.
          <br />
          <br />
          Gameplay is always determined by the mechanics of the game, which
          should captivate the gamer and make them want to spend at least 20-30
          minutes a day playing it. If play-to-earn mechanics dominate a game,
          then it is not a game but merely a gamified earning tool. NFT games
          are often too focused on earning mechanics, and many players only play
          them for that reason. We are not building a gamified financial
          instrument. We are building a real high-end game.
        </>
      ),
    },
    {
      title: "Why choose Play-And-Earn instead of Play-to-Earn?",
      description: (
        <>
          Our Play-And-Earn model evolved from the P2E framework. It puts the
          focus back on providing real, quality gaming entertainment first,
          which leads to a sustainable, open game economy.
          <br />
          <br />
          With Play-and-Earn, we aim to build value with gameplay. Providing a
          high entertainment game encourages players to keep playing and seeking
          valuable rewards they can spend in the game to improve their gameplay
          experience and develop their character and skills. P2E games are
          pretty much as they sound — users play them to earn currency. The
          problem is that the imbalance of resources entering and leaving the
          game makes building a sustainable economy very challenging.
        </>
      ),
    },
    {
      title: "How can I get into a private sale?",
      description: (
        <>
          Anyone can participate in our sale without any restrictions! Just join
          the Whitelist to take a seat.
        </>
      ),
    },
    {
      title: "Is Chain Joes free?",
      description: (
        <>
          Yes. Many players want to play games while earning. A major limitation
          of existing NFT games is their high entry barrier.
          <br />
          <br />
          Chain Joes is a mobile-native game available to download for free.
          This makes it easy to onboard millions of players. Many traditional
          players won't play NFT games if they have to invest a certain amount
          of money, but the more players, the better the battle. Pay to Play
          would limit the expansion of our game.
        </>
      ),
    },
    {
      title: "What is $CJ token?",
      description: (
        <>
          Chain Joes Governance Tokens ($CJ) are tokens that underpin the Chain
          Joes ecosystem.
        </>
      ),
    },
    {
      title: "What are the use cases of $CJ token? ",
      description: (
        <>
          - Reward players for actively participating in the Chain Joes
          ecosystem;
          <br />
          <br />
          - Empower users to make key decisions regarding the direction of the
          Chain Joes ecosystem;
          <br />
          <br />- Encourage users to engage with the tokens’ use case and redeem
          rewards.
        </>
      ),
    },
    {
      title: "What is the Backstory?",
      description: (
        <>
          Near future....
          <br />
          <br />
          Billions of citizens in existing metaverses now have access to new
          meta-jump technology. Using this technology, you can move between any
          metaverse in a second without paying for gas.
          <br />
          <br />
          Those universes where meta-jumps are possible to make up the Chain
          Verse.
          <br />
          <br />
          Watch the{" "}
          <Link
            href="https://www.youtube.com/watch?v=yfwYxR_gd6s"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            Backstory video.
          </Link>
        </>
      ),
    },
    {
      title: "Is the game playable on mobile?",
      description: (
        <>
          Yes, we are developing a game for mobile devices, as the mobile games
          market is developing successfully from year to year. The game will be
          available for Android and iOS.
        </>
      ),
    },
    {
      title: "When will the game be released?",
      description: (
        <>
          The game release of the Alpha Version is scheduled for the 2nd quarter
          of 2024. In the third quarter of 2023, a Closed Beta Test will be
          available. The project's roadmap can be discovered in more detail at
          the{" "}
          <HashLink
            to="/main/#roadmap"
            scroll={(el) => {
              el.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              handleMobileMenu();
            }}
            style={{
              color: "#00FFB7",
            }}
          >
            link
          </HashLink>
          .
        </>
      ),
    },
    {
      title: "What characters can I play for in the game?",
      description: (
        <>
          At the time of the Closed Beta Test, 6 characters will be available in
          the game:
          <br />
          <br />- Watch Mr. Tyr{" "}
          <Link
            href="https://www.youtube.com/watch?v=w2EYhMi7DyA"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
          <br />
          <br />- Watch Deo{" "}
          <Link
            href="https://www.youtube.com/watch?v=lEDsg8A2wIk"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
          <br />
          <br />- Watch Sam{" "}
          <Link
            href="https://www.youtube.com/watch?v=Vz8_JnxTew0"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
          <br />
          <br />- Watch Shaan{" "}
          <Link
            href="https://www.youtube.com/watch?v=ztPV7zLrz28"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
          <br />
          <br />- Watch MiLcy{" "}
          <Link
            href="https://www.youtube.com/watch?v=Ut3KeILUrRg"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
          <br />
          <br />- Watch Anwar{" "}
          <Link
            href="https://www.youtube.com/watch?v=OwwP3IB0czo"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            backstory.
          </Link>
        </>
      ),
    },
    {
      title: "Can you share some video gameplay?",
      description: (
        <>
          Discover our gameplay concept by the{" "}
          <Link
            href="https://www.youtube.com/watch?v=bJ28vhjO4Qg"
            underline="none"
            target="_blank"
            style={{
              color: "#00FFB7",
            }}
          >
            link.
          </Link>
        </>
      ),
    },
    {
      title: "Do you have a video teaser? ",
      description: (
        <>
          The cinematic teaser of the game will be available in mid-December!
          Don't miss the update in the discord! A full trailer is expected for
          late March.
        </>
      ),
    },
    {
      title: "What are the play-to-earn aspects of the game?",
      description: (
        <>
          In Chain Joes, players can convert their effort into earnings in three
          main ways:
          <br />
          <br />
          - Get rewarded for playing well;
          <br />
          <br />
          - Stake;
          <br />
          <br />
          - Marketplace.
          <br />
          <br />
        </>
      ),
    },
    {
      title: "Where can I learn more about the game?",
      description: (
        <>
          First things first, read our Chain Joes{" "}
          <a
            href="/pdfs/Whitepaper.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", cursor: "pointer" }}
          >
            <b>Whitepaper</b>
          </a>{" "}
          to get a broad overview of what we are building and why. For further
          information, follow our posts on{" "}
          <a
            href="https://medium.com/@ChainJoes"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", cursor: "pointer" }}
          >
            <b>Medium</b>
          </a>
          ,{" "}
          <a
            href="https://twitter.com/ChainJoes"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", cursor: "pointer" }}
          >
            <b>Twitter</b>
          </a>{" "}
          and simply stay connected to our{" "}
          <a
            href="https://discord.gg/AABG2mJZAp"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", cursor: "pointer" }}
          >
            <b>Discord</b>
          </a>{" "}
          server.
          <br />
          <br />
          You can check out the Chain Joes Gitbook.
        </>
      ),
    },
    {
      title:
        "I'm an influencer/content creator/partner - Who should I contact?",
      description: (
        <>
          Influencers and content creators, can apply here:{" "}
          <Link
            href="https://bit.ly/cj-Influencers"
            underline="none"
            style={{
              color: "#00FFB7",
            }}
          >
            https://bit.ly/cj-Influencers
          </Link>
        </>
      ),
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          paddingBottom: { xs: "60px", md: "100px", lg: "160px", xl: "200px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: { xs: "block", xl: "none" },
            width: { xs: "calc(100% - 80px)", md: 498 },
            height: "100%",
            right: isMenuOpen ? 0 : "-100%",
            top: 0,
            background: "#080808",
            zIndex: 100,
            transition: "all 0.2s ease-in-out",
            padding: "36px 40px",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{ position: "absolute", top: "12px", right: "12px" }}
            onClick={handleMobileMenu}
          >
            <img src={CloseBtn} alt="close-btn" />
          </Box>
          {buttons.map((button, index) => (
            <Box
              sx={{ marginBottom: activeMenuDropdown === index ? "36px" : "0" }}
            >
              <Box
                onClick={() => {
                  setActiveMenuDropdown(index);
                }}
                sx={{
                  marginBottom: {
                    xs: activeMenuDropdown === index ? "0" : "32px",
                    md: activeMenuDropdown === index ? "0" : "36px",
                  },
                  display: "flex",
                  "& .menu-dropdown": {
                    width: { xs: 256, md: 466 },
                    fontSize: { xs: "16px", md: "32px" },
                    lineHeight: { xs: "16px", md: "32px" },
                  },
                  "& > img": {
                    transform:
                      activeMenuDropdown === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                {button.link ? (
                  <>
                    {button.type === "scroll" ? (
                      <HashLink
                        to={button.link}
                        scroll={(el) => {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          handleMobileMenu();
                        }}
                      >
                        <Typography
                          className="menu-dropdown"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {button.title}
                        </Typography>
                      </HashLink>
                    ) : (
                      <Link href={button.link} target="_blank" underline="none">
                        <Typography
                          className="menu-dropdown"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {button.title}
                        </Typography>
                      </Link>
                    )}
                  </>
                ) : (
                  <Typography
                    className="menu-dropdown"
                    fontFamily="Inter"
                    fontWeight={500}
                    color="#FFFFFF"
                  >
                    {button.title}
                  </Typography>
                )}

                {button.links && (
                  <img src={ArrowDown} alt="arrow-down" width="32px" />
                )}
              </Box>
              {button.links && (
                <Box
                  sx={{
                    marginTop: {
                      xs: activeMenuDropdown === index ? "16px" : "0px",
                      md: activeMenuDropdown === index ? "20px" : "0px",
                    },
                    maxHeight: {
                      xs:
                        activeMenuDropdown === index
                          ? `${
                              button.links.length * 14 +
                              (button.links.length - 1) * 16
                            }px`
                          : 0,
                      md:
                        activeMenuDropdown === index
                          ? `${(button.links.length * 2 - 1) * 24}px`
                          : 0,
                    },
                    paddingBottom: activeMenuDropdown === index ? "5px" : "0px",
                    opacity: activeMenuDropdown === index ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {button.links.map((link, index) => (
                    <Box
                      sx={{
                        marginBottom:
                          button.links.length - 1 !== index
                            ? { xs: "16px", md: "24px" }
                            : 0,
                        "& .dropdown-point": {
                          fontSize: { xs: "14px", md: "24px" },
                          lineHeight: { xs: "14px", md: "24px" },
                        },
                      }}
                    >
                      {link.type === "scroll" ? (
                        <HashLink
                          to={link.link}
                          scroll={(el) => {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            handleMobileMenu();
                          }}
                        >
                          <Typography
                            className="dropdown-point"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {link.title}
                          </Typography>
                        </HashLink>
                      ) : (
                        <Link href={link.link} target="_blank" underline="none">
                          <Typography
                            className="dropdown-point"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {link.title}
                          </Typography>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: isMenuOpen
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0)",
            backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
            zIndex: isMenuOpen ? 2 : -1,
            transition: "all 0.2s ease-in-out",
          }}
        />
        <Box
          sx={{
            paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
            paddingY: { xs: "15px", lg: "30px" },
          }}
        >
          <Box>
            <Header closeMenu={handleMobileMenu} buttons={buttons} />
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "60px", md: "100px" } }}>
          <Box
            sx={{
              fontSize: { xs: "44px", md: "105px" },
              lineHeight: { xs: "39.6px", md: "95px" },
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Aaaiight"
              textAlign="center"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              faq
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "30px", md: "80px" } }}>
          {faq.map((item, index) => (
            <Box
              sx={{
                width: { xs: 280, md: 580, lg: 588, xl: 771 },
                padding: { xs: "16px", md: "24px" },
                border: "1px solid",
                borderColor: activeFaq === index ? "#00FFB7" : "#242424",
                borderRadius: "4px",
                marginBottom: "32px",
                marginX: "auto",
                cursor: "pointer",
              }}
              onClick={() => setActiveFaq(index)}
            >
              <Box
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: { xs: "14px", md: "32px" },
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  "& > img": {
                    transform:
                      activeFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.title}
                </Typography>
                <img src={ArrowDown} alt="arrow-down" width="24px" />
              </Box>
              <Box
                sx={{
                  display: activeFaq === index ? "block" : "none",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: { xs: "19.2px", md: "22.4px" },
                  marginTop: { xs: activeFaq === index ? "8px" : "0px" },
                  maxHeight: {
                    xs: activeFaq === index ? "360px" : "0px",
                    md: activeFaq === index ? "800px" : "0px",
                  },
                  opacity: activeFaq === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQ;
