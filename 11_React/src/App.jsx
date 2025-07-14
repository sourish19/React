import { useState } from "react";
import Accordian from "../components/Accordian";

const App = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Section 4",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Section 5",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];
  const handleAccordianClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  return (
    <div className="bg-gray-950 min-h-screen flex justify-center pt-10 pb-5">
      <div className="text-white w-[50%] bg-amber-100 flex flex-col items-center ">
        {accordionData.map((e, index) => {
          return (
            <Accordian
              title={e.title}
              content={e.content}
              index={index}
              openIndex={openIndex}
              onAccordionClick={handleAccordianClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
