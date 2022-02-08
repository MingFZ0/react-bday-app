function ListComponent(props) {
    return (
      /* we need to iterrate through the people data and display all the information for each person */
      <section>
      {props.people.map((person) => {
        return (
          <div key={person.id}>
              <h2>{person.name}</h2>
              <h3>{person.age}</h3>
              <img src={person.image}/>
          </div>
        )
      })}
      </section>
    )
  }
  
  export default ListComponent;