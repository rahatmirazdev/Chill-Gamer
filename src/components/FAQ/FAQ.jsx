const faqs = [
  {
    question: "What is Chill Gamer?",
    answer: "Chill Gamer is a platform where gamers can share their reviews, discover new games, and connect with a community that shares their passion for gaming.",
  },
  {
    question: "How can I add a review?",
    answer: "To add a review, you need to be logged in. Once logged in, you can navigate to the 'Add Review' page and fill out the form to submit your review.",
  },
  {
    question: "How can I join the community?",
    answer: "You can join the community by registering for an account. Once registered, you can participate in discussions, share reviews, and connect with other gamers.",
  },
  {
    question: "Is Chill Gamer free to use?",
    answer: "Yes, Chill Gamer is completely free to use. You can browse reviews, add your own reviews, and connect with other gamers without any cost.",
  },
];

const FAQ = () => {
  return (
    <div className="my-24 max-w-[1440px] mx-auto px-2">
      <h2 className="text-3xl font-bold text-primaryText mt-8 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-secondaryAccent shadow-md rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-bold text-primaryText peer-checked:bg-primary peer-checked:text-primary-content">
              {faq.question}
            </div>
            <div className="collapse-content text-secondaryText peer-checked:bg-primary peer-checked:text-primary-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;