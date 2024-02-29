import React, { useEffect, useState } from 'react';

export default function Search(props) {
  const [Name, setName] = useState('');
  const [lista, setLista] = useState([]);

  const handleSearch = () => {
    if (props.list) {  
      const search = props.list.filter((e) =>e.nom.toLowerCase().includes(Name.toLowerCase())
      );
      setLista(search);  
    }
  };


  useEffect(() => {
    handleSearch();
  }, [Name]);

  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {lista.length > 0 ? (
        <div className="d-flex justify-content-center">
          {lista.map((S, index) => (
            <div className="card-group container my-5" key={index}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={S.photo}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h4 className="card-title">{S.nom}</h4>
                  <p className="card-text">{S.prenom}</p>
                  <h4 className="card-title">{S.ville}</h4>
                  <p className="card-text">{S.fil}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
