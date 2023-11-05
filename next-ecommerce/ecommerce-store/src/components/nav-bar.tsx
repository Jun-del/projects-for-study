import React from "react";
import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

const Navbar = async () => {
  const categories = (await getCategories()) ?? [];

  return (
    <Container>
      <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
          <p className="text-xl font-bold">Store</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
  );
};

export default Navbar;
