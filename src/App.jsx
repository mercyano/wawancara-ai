import React, { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import QuestionsModal from "./components/QuestionsModal";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateQuestion = async (job) => {
    setIsOpen(true);
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "I want you to act as a recruiter. I'll give you some information about the job opening, and your job is to come up with 5 questions that might be asked in an interview. An answer is simply a numbered list, with no opening or closing words. All output must be in Bahasa Indonesia.\n\nJob: " +
          job.title +
          "\n\nJob description or requirements: " +
          job.description +
          "",
        temperature: 0.5,
        max_tokens: 1000,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );
      const json = await response.json();
      const data = json.choices[0].text.trim();
      console.log(data);
      console.log(typeof data);
      setQuestions(data.split("\n"));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="#FAFAFA" color="blackAlpha.900" height="100vh" paddingTop={70}>
      <Container maxW="50%" centerContent>
        <Header />
        <TextInput generateQuestion={generateQuestion} />
        <QuestionsModal
          questions={questions}
          isOpen={isOpen}
          loading={loading}
          closeModal={closeModal}
        />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
