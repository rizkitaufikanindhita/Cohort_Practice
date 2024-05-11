import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime"

const QuoteComp = () => {
  const [randNum, setRandNum] = useState(0)

  type Quote = {
    pesan: string,
    penulis: string,
    jabatan: string
  }
  const quotes: Quote[] = [
  {
    pesan: "Success is not the result of spontaneous combustion. You must set yourself on fire.",
    penulis: "Fred Shero",
    jabatan: "Former Head Coach of the Philadelphia Flyers"
  },
  {
    pesan: "The only way to do great work is to love what you do.",
    penulis: "Steve Jobs",
    jabatan: "Co-founder of Apple Inc."
  },
  {
    pesan: "Believe you can and you're halfway there.",
    penulis: "Theodore Roosevelt",
    jabatan: "26th President of the United States"
  },
  {
    pesan: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    penulis: "Winston Churchill",
    jabatan: "Former Prime Minister of the United Kingdom"
  },
  {
    pesan: "The only limit to our realization of tomorrow will be our doubts of today.",
    penulis: "Franklin D. Roosevelt",
    jabatan: "32nd President of the United States"
  },
  {
    pesan: "Quality is not an act, it is a habit.",
    penulis: "Aristotle",
    jabatan: "Greek Philosopher"
  },
  {
    pesan: "The future belongs to those who believe in the beauty of their dreams.",
    penulis: "Eleanor Roosevelt",
    jabatan: "Former First Lady of the United States"
  }
];

  const randomQuotes = (q: number) => {
    const randNum = Math.floor(Math.random()*q)
    setRandNum(randNum)
  }
  
  useEffect(() =>{
    randomQuotes(quotes.length)
  },[])

  console.log(randNum)

  return <Fragment> 
    <div className="bg-slate-200 flex justify-center items-center h-screen">
      <div className="p-40 text-left">
        <div className="font-black text-3xl">
          {quotes[randNum].pesan}
        </div>
        <div className="text-xl font-bold mt-5">{quotes[randNum].penulis}</div>
        <div className="font-light">{quotes[randNum].jabatan}</div>
      </div>
    </div>
  </Fragment>
}

export default QuoteComp
