import { createContext, useEffect, useState } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/customers");
      const responseJSON = await response.json();

      setCustomers(responseJSON);
    };

    fetchData();
  }, []);

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:3001/customers/${id}`, { method: "DELETE" });
    setCustomers(customers.filter((customer) => customer.id !== id));
  };
  return (
    <CustomerContext.Provider value={{ customers, deleteCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

// export { deleteCustomer };

export default CustomerContext;
