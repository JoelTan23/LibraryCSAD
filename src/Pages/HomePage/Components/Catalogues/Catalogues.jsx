import React, { useRef } from "react";
import "./Catalogues.css";
import { useNavigate } from "react-router-dom";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import book_1 from "../../assets/Pokemon_book.jpg";
import book_2 from "../../assets/What's_Your_Dream.jpg";
import book_3 from "../../assets/Reset_book.jpg";
import book_4 from "../../assets/Minecraft_book.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Catalogues = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Catalogues");
  };

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="catalogues">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="book-info">
                <img src={book_1} alt="" />
                <div>
                  <h3>
                    Pokemon Super Duper Extra Deluxe Essential Handbook: Stats
                    on More Than 1,000 Characters!
                  </h3>
                  <span>Scholastic</span>
                </div>
              </div>
              <p>
                The brand new edition of the bestselling Super Deluxe Essential
                Handbook is here – and it includes all-new Pokémon! With 560
                colour pages and info on over 900 Pokémon, this is a must-have
                for kids of all ages. If you want to catch 'em all, you gotta
                read about 'em all! This revised and updated edition of the
                mega-bestselling Essential Handbook and Super Deluxe Essential
                Handbook has all the stats and facts kids need to know about the
                world of Pokémon. Essential information on over 900 Pokémon is
                jam-packed into 560 illustrated, full-colour pages. The handbook
                is easy to read and organised simply and effectively into one
                comprehensive, kid-friendly reference book. This updated edition
                features tons of extra pages devoted to the newest Pokémon from
                the Sword and Shield video games. It is an absolute must-have
                for Pokémon Trainers of all ages. Features stats and facts from
                Pokémon from the eight known regions. Full-colour illustations
                throughout. Perfect for old and new fans.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="book-info">
                <img src={book_2} alt="" />
                <div>
                  <h3>
                    What's Your Dream?: Find Your Passion. Love Your Work. Build
                    a Richer Life.
                  </h3>
                  <span> Simon Squibb</span>
                </div>
              </div>
              <p>
                Find Your Passion. Love Your Work. Build a Richer Life. What's
                your dream? It's a simple question, but one which very few of us
                ever really think about. From early on, we are taught that
                there's only one path to getting ahead: do well at school, get a
                certain kind of job, and avoid failure at all costs. We're so
                busy trying to follow these rules that we never stop and ask
                ourselves: What's my purpose? What do I really want? Do I have
                the power to make it happen? Simon Squibb is on a mission to
                change people's lives for the better. Here, he shares the
                hard-won life lessons from his years in the business world plus
                his own personal life, from facing homelessness as a teenager to
                selling a multi-million pound business, and now inspiring a new
                generation of budding entrepreneurs. Simon will empower readers
                to identify their own meaningful goals, to remove the barriers
                that stand in the way, and ultimately to build a richer life.
                Sometimes, it just takes one person to believe in you...
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="book-info">
                <img src={book_3} alt="" />
                <div>
                  <h3>Reset: How to change what’s not working</h3>
                  <span>Dan Heath</span>
                </div>
              </div>
              <p>
                Reset will help you get unstuck, shake off old habits, and
                overcome the inertia of the way things always work. Heath shares
                a framework, based on research in psychology and hundreds of
                interviews, to help you vault toward what really matters.
                Crucially, you can make positive changes without the need for
                additional time or money (which, for most of us, is not
                forthcoming). The secret is to find leverage points: places
                where a little bit of effort can yield a disproportionate
                return.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="book-info">
                <img src={book_4} alt="" />
                <div>
                  <h3>Minecraft Mobspotter’s Encyclopedia</h3>
                  <span> Mojang AB </span>
                </div>
              </div>
              <p>
                Minecraft is a multi-platform block-based gaming sensation.
                Whether you're in Creative, Survival or Hardcore Mode, the
                Minecraft books contain all the advice you need to survive and
                thrive! Written by expert guides who specialise in studying mobs
                and biomes, the Minecraft Mob Encyclopedia is an adventure to
                discover every Mob in the game. The Overworld is an enormous
                land full of beautiful biomes and teeming with life, so much so
                that it can be a challenge to witness all it has to offer. The
                Minecraft Mob Encyclopedia is brought to you by experts who
                specialise in exploring biomes and love sharing their
                experiences of mob spotting. Cross plains and jungles, oceans
                and caves as you go on an exciting journey to discover every
                single mob in the game! It’s time for adventure!
              </p>
            </div>
          </li>
        </ul>
      </div>
      <button className="btn dark-btn" onClick={handleClick}>
        Explore More
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Catalogues;
