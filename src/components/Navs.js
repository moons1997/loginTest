import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const Navs = ({ menu, menuChild, status }) => {
  return (
    <Nav className="mr-auto">
      {menu.map(
        (item) =>
          item.type === status &&
          (item.child ? (
            <NavDropdown
              title={item.title}
              id="basic-nav-dropdown"
              key={item.id}
            >
              {item.child &&
                menuChild.map(
                  (child) =>
                    item.id === child.parentId && (
                      <NavDropdown.Item href={child.url} key={child.id}>
                        {child.title}
                      </NavDropdown.Item>
                    )
                )}
            </NavDropdown>
          ) : (
            <Nav.Link href={item.url} key={item.id}>
              {item.title}
            </Nav.Link>
          ))
      )}
    </Nav>
  );
};

export default Navs;
