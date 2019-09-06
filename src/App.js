import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import "./App.css";

import { AppContext } from "./AppContext";

import Search from "./Components/Search";
import Offset from "./Components/Offset";
import ImageList from "./Components/ImageList";
import LatestQueries from "./Components/LatestQueries";
import Loader from "./Components/Loader";
import Nav from "./Components/Nav";

function App() {
  const context = useContext(AppContext);

  const handleSearchSubmit = newVal => {
    context.setOffset(0);
    context.setSearch(newVal);
    // new search == reset offset
    context.setOffsetForced(0);
  };

  const handleOffsetSubmit = newVal => {
    context.setSearchForced(context.search);
    context.setOffsetForced(newVal);
    context.setOffset(newVal);
  };

  const handleHistoryClick = history => (histSearch, histOffset) => {
    console.log(histSearch, histOffset);
    context.setSearchForced(histSearch);
    context.setOffsetForced(histOffset);
    context.setSearch(histSearch);
    context.setOffset(histOffset);
    history.push("/search");
  };

  const renderSearchComponents = () => {
    let displayDatas = <Loader />;
    if (!context.loading) {
      displayDatas = (
        <React.Fragment>
          <Offset
            onSubmitInput={handleOffsetSubmit}
            forcedValue={context.offsetForced}
          />
          <ImageList imageList={context.imageList} />
        </React.Fragment>
      );
    }
    return (
      <div className="search__component">
        <Search
          onSubmitInput={handleSearchSubmit}
          forcedValue={context.searchForced}
        />
        {displayDatas}
      </div>
    );
  };

  const renderHistoryComponents = () =>
    withRouter(({ history }) => (
      <LatestQueries onSelectItem={handleHistoryClick(history)} />
    ));

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/search" render={renderSearchComponents} />
          <Route path="/history" render={renderHistoryComponents()} />
        </Switch>
        {context.error && <div style={{ color: "red" }}>{context.error}</div>}
      </div>
    </Router>
  );
}

export default App;
