app.run(function(amMoment) {
    amMoment.changeLocale('de');
});

app.controller("reddit", function($scope){
  $scope.posts =[
    {
      title: "Fort Fun",
      author: "The Ram",
      description: "Blah blah blah beer.",
      image: 'img/fortcollins.jpg',
      date: 1442705903000,
      votes: 3,
      comments: [
        {
          name: "Kevin",
          comment: "Fort Collins has the best beer!"
        }
      ]
    },
    {
      title: "Vermont",
      author: "JimBob Smith",
      description: "Hillbilly nonsense.",
      image: 'img/Vermont.jpg',
      date: 1442005103000,
      votes: 0,
      comments: []
    },
    {
      title: "New York, NY",
      author: "Veronica Princess",
      description: "Fancy schmancy gravity schmavity.",
      image: 'img/NYC.jpg',
      date: 1442000103000,
      votes: -1,
      comments: [
        {
          name: "Tracey",
          comment: "Great post!"
        },
        {
          name: "Marcus",
          comment: "People from NY are so rude."
        }
      ]
    }
  ];

  $scope.addPost = function(){
    if($scope.newPost.$valid){
      var newReddit =
        {
          title: $scope.title,
          author: $scope.author,
          description: $scope.description,
          image: $scope.image,
          date: Date.now(),
          votes: 0,
          comments: []
        };
      $scope.posts.push(newReddit);
    }
  };

  $scope.sort = "-votes";
  // $scope.options = ['title', 'votes', 'date'];

  $scope.addComment = function(commentName, commentBody, title){

    var newComment = {
      name: commentName,
      comment: commentBody
    };

    for (var i = 0; i < $scope.posts.length; i++) {
      if($scope.posts[i].title === title){
        index = i;
        $scope.posts[i].comments.push(newComment);
      }
    }
  };

});

