import Link from "next/link";

const Form = ({ type, setPost, submitting, handleSubmit }) => {

  return(
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">{type} Post</h1>
        <span className="blue_gradient">{type} Post</span>
        
      </section>
    </>
  )
};

export default Form;
