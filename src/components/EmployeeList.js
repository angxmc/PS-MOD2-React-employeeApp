import EmployeeListItem from "./EmployeeListItem";

function EmployeeList(props) {
  const { contacts } = props;
  return (
    <div>
      {contacts ? (
        contacts.map((item) => <EmployeeListItem key={item.id} contact={item} />)
      ) : (
        <h3>No such person</h3>
      )}
    </div>
  );
}
export default EmployeeList;