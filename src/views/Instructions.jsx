import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

function Instructions() {
  return (
    <div className="container section">
      <Typography>
        <Title>Instructions</Title>
        <Paragraph>
          Авторы статьи подтверждают, что данная статья не содержит сведений, не
          подлежащих опубликованию в открытой печати, ранее не публиковалась и
          не нарушает авторского права других лиц и организаций. Авторы статьи
          гарантируют, что они предоставляют полностью оригинальные работы, и
          если авторы использовали чьи-либо работы и/или слова, то они были
          соответствующим образом процитированы. После опубликования материала в
          журнале автор не может воспроизводить текст полностью или частично без
          предварительного согласования с главным редактором журнала "Молодой
          специалист". При наличии полученного разрешения обязательно следует
          сделать ссылку на первую публикацию в последующих версиях и
          переработках текста. Если автор обнаруживает значительную ошибку или
          неточность в публикуемой работе, в обязанность автора входит как можно
          скорее уведомить главного редактора об этом и сотрудничать по поводу
          изъятия или исправления. статьи.
        </Paragraph>
      </Typography>
    </div>
  );
}

export default Instructions;