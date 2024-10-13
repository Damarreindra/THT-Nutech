import React from "react";
import Layout from "../components/Layout";
import UserInfo from "../components/UserInfo";
import TransactionHistory from "../components/TransactionHistory";

function Transaction() {
  return (
    <div>
      <Layout>
        <UserInfo />
        <TransactionHistory/>
      </Layout>
    </div>
  );
}

export default Transaction;
