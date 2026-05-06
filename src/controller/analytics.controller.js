// same data jaisa posts.controller.js me hai
const posts = [
  { id: "1", title: "First Post", content: "Hello World", author: "student1" },
  { id: "2", title: "Second Post", content: "Another Post", author: "student2" },
  { id: "3", title: "Third Post", content: "Third Content", author: "student1" }
];

exports.getTopStudents = (req, res) => {

  const count = {};

  posts.forEach(post => {
    const student = post.author;
    count[student] = (count[student] || 0) + 1;
  });

  const result = Object.entries(count)
    .map(([studentId, enrollmentCount]) => ({
      studentId,
      enrollmentCount
    }))
    .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
    .slice(0, 5);

  res.status(200).json({
    success: true,
    data: result
  });
};