import { useState } from "react";
import "./styles.css";

const bookDb = {
  SelfHelp: [
    {
      title: "How To Win Friends & Influence People",
      author: "Dale Carnegie",
      rating: "4.8/5",
      description:
        "How to Win Friends & Influence People will teach you- Six ways to make people like you,Twelve ways to win people to your way of thinking, Nine ways to change people without arousing resentment, And much more! Achieve your maximum potential—a must-read for the twenty-first century with more than 15 million copies sold!",
      bookLink:
        "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
    },
    {
      title: "Atomic Habit",
      author: "James Clear",
      rating: "5/5",
      description:
        "Packed with evidence-based strategies, Atomic Habits will teach you how to make small changes that will transform your habits and deliver amazing results.",
      bookLink:
        "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
    },
    {
      title: "Think And Grow Rich",
      author: "Napoleon Hill",
      rating: "4.5/5",
      description:
        'Think and Grow Rich has been called the "Granddaddy of All Motivational Literature." It was the first book to boldly ask, "What makes a winner?',
      bookLink:
        "https://www.amazon.in/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T Kiyosaki",
      rating: "4.9/5",
      description:
        "It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.",
      bookLink:
        "https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194"
    }
  ],
  JavaScript: [
    {
      title: "JavSript: The Good Parts",
      author: "Crockford Douglas",
      rating: "4.8/5",
      description:
        "With JavaScript: The Good Parts , you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code.",
      bookLink:
        "https://www.amazon.in/Javascript-Good-Parts-D-Crockford/dp/0596517742"
    },
    {
      title: "You Don′t Know JS – Scope and Closures",
      author: "Kyle Simpson",
      rating: "5/5",
      description:
        "This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
      bookLink:
        "https://www.amazon.in/You-Don%E2%80%B2t-Know-JS-Closures/dp/1449335586"
    }
  ],
  Marketing: [
    {
      title: "Hooked: How to Build Habit-Forming Products",
      author: "Nir Eyal",
      rating: "4.2/5",
      description:
        "The book helps to establish the process apps go through to get to this habit forming status, following a 'trigger', 'action', 'reward', 'investment'.",
      bookLink:
        "https://www.amazon.in/Hooked-How-Build-Habit-Forming-Products/dp/0241184835"
    },
    {
      title: "This is Marketing: You Can’t Be Seen Until You Learn To See",
      author: "Seth Godin",
      rating: "4.5/5",
      description:
        "This is Marketing shows you how to do work you're proud of, whether you're a tech startup founder, a small business owner, or part of a large corporation. No matter what your product or service, this book will help you reframe how it's presented to the world, in order to meaningfully connect with people who want it.",
      bookLink: "https://www.amazon.in/This-Marketing-Seth-Godin/dp/0241370140"
    },
    {
      title: "Hacking Growth",
      author: "Sean Ellis",
      rating: "4.8/5",
      description:
        "The definitive playbook by the pioneers of Growth Hacking, one of the hottest business methodologies in Silicon Valley and beyond.",
      bookLink:
        "https://www.amazon.in/Hacking-Growth-Fastest-Growing-Companies-Breakout/dp/045149721X"
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("SelfHelp");

  const clickHandler = (item) => {
    setSelectedGenre(item);
  };

  console.log(bookDb[selectedGenre]);

  return (
    <div className="App">
      <header>
        <h2>BookEPedia</h2>
        <p>Get Top Book Recomendation from Mainak</p>
      </header>
      <section className="buttons">
        {Object.keys(bookDb).map((item) => (
          <button
            className={selectedGenre === item ? "active" : "inActive"}
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        ))}
      </section>
      <section>
        {bookDb[selectedGenre].map((item) => (
          <div className="book-details-container">
            <h3 className="book-details">{item.title}</h3>
            <p className="book-details">Author: {item.author}</p>
            <p className="book-details">Rating: {item.rating}</p>
            <details className="book-details">
              <summary>
                <b>Read Description</b>
              </summary>
              <p>{item.description}</p>
            </details>
            <a className="book-details" href={item.bookLink}>
              View On Amazon
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
