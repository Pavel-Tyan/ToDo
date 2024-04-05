export const TodoList = (): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button></button>
    </div>
  );
};
