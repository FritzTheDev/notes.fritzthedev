export const ErrorPage = ({ errorMessage }) => {
  <main className="w-screen h-screen flex justify-center items-center">
    <h2 className="text-4xl text-red-500 font-extrabold">{errorMessage}</h2>
  </main>;
};
