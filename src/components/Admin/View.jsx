import { doc, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { dp } from '../../firebaseConfig';

function View() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const docRef = doc(dp, "Articles", id);
        onSnapshot(docRef, (snapshot) => {
          setArticle({ ...snapshot.data(), id: snapshot.id });
        });
      }, [console.log(article)]);

  return (
      <section className="viewsection">
    <div className="container border bg-light">
      {article && (
        <div className="row">
          <div className="col-3">
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ width: "100%", padding: 10 }}
            />
          </div>
          <div className="col-9 mt-3">
            <h2>{article.title}</h2>
            <h5>Author: {article.createdBy}</h5>
            <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{article.description}</h4>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}

export default View