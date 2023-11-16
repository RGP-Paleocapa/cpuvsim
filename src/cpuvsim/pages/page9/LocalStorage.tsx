import useLocalStorage from '@hooks/useLocalStorage';

function LocalStorage() {
  const [name, setName] = useLocalStorage('name', 'Guest');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className='bg-green-600 p-4'>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className='px-2 rounded'
      />
      <p className='dark:text-white my-4 text-lg'>Hello, {name}</p>
    </div>
  );
}

export default LocalStorage;
