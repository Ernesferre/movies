import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Pages = ({ setPage }) => {
  return (
    <Breadcrumb separator="-">
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          href="1"
          onClick={() => {
            setPage(1);
            // setclickButton(false);
          }}
        >
          1
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          href="2#"
          onClick={() => {
            setPage(2);
            // setclickButton(false);
          }}
        >
          2
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink
          href="3#"
          onClick={() => {
            setPage(3);
            // setclickButton(false);
          }}
        >
          3
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Pages;
