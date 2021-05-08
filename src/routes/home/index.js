import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const url = `https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_API_KEY}&per_page=10`;

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data || []);
      });
  }, []);

  return (
    <div className="font-mono">
      <div class="container my-12 mx-auto px-4 md:px-6 pt-10">
        <div class="flex flex-wrap mx-1 lg:-mx-4">
          {/** Start of the card */}
          {items.map((item) => {
            // “Objects are not valid as a React child” -- objects cannot be used in the JSX statement ( new Date will give us a date object hence converting to string)
            
            const createdDate = new Date(item.created_at).toDateString()
            const color = ['red','blue', 'orange', 'teal', 'green']
            const containerClass = `bg-white overflow-hidden border-b-4 mb-4 border-${color[Math.floor((Math.random() * 5) + 1)]}-300 mr-5`

            return (
              <div class={containerClass} id={item.id}>
                <a href={`${item.links.html}`} target="_blank">
                  <img
                    alt={`${item.alt_description}`}
                    src={`${item.urls.small}`}
                    class="w-full object-cover h-32 sm:h-48 md:h-64"
                  />
                <div class="p-4 md:p-6">
                  
                  <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
                    {item.user.first_name}
                  </h3>
                  <div class="text-sm flex items-center">
                    <svg
                      class="opacity-75 mr-2"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      width="12"
                      height="12"
                      viewBox="0 0 97.16 97.16"
                      style="enable-background:new 0 0 97.16 97.16;"
                    >
                      <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
                      <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
                    </svg>
                    <p class="leading-none">{createdDate}</p>
                  </div>
                </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
