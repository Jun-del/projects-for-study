// Import libraries
import javax.swing.JFrame;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.Color;
import java.awt.Image;
import java.awt.event.MouseEvent;
import java.awt.event.MouseAdapter;

class Game extends JFrame{
    JLabel computerMove, result;
    JLabel computerScore, playerScore;
    int computer_score, player_score = 0;
    ImageIcon rock_img, paper_img, scissor_img;

    public void setup(){
        // Get images
        rock_img = new ImageIcon(new ImageIcon("src/rock.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));
        paper_img = new ImageIcon(new ImageIcon("src/paper.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));
        scissor_img = new ImageIcon(new ImageIcon("src/scissor.png").getImage().getScaledInstance(80, 80, Image.SCALE_DEFAULT));

        // Create label
        // Score
        JLabel score = new JLabel("Score");
        score.setBounds(20, 0, 100, 100);


        computerScore = new JLabel();
        computerScore.setText("Computer: 0");
        computerScore.setBounds(20, 15, 150, 100);

        playerScore = new JLabel();
        playerScore.setText("Player: 0");
        playerScore.setBounds(20, 30, 150, 100);

        // Computer move
        computerMove = new JLabel();
        computerMove.setHorizontalTextPosition(JLabel.CENTER);
        computerMove.setVerticalTextPosition(JLabel.BOTTOM);
        computerMove.setBounds(250, 90, 100, 100);

        // Result
        result = new JLabel();
        result.setFont(new Font("Arial", Font.BOLD, 20));
        result.setBounds(250, 450, 100, 100);

        // Computer label
        JLabel computer_label = new JLabel();
        computer_label.setText("Computer");
        computer_label.setBounds(260, 180, 100, 100);

        // Versus label
        JLabel versus = new JLabel();
        versus.setText("VS");
        versus.setBounds(280, 200, 100, 100);

        // Player label
        JLabel player_label = new JLabel();
        player_label.setText("Player");
        player_label.setBounds(270, 220, 100, 100);

        // Rock label
        JLabel rock_label = new JLabel();
        rock_label.setText("Rock");
        rock_label.setIcon(rock_img); // Set icon
        rock_label.setHorizontalTextPosition(JLabel.CENTER);
        rock_label.setVerticalTextPosition(JLabel.BOTTOM);
        rock_label.setBounds(150, 300, 100, 100);

        // Paper label
        JLabel paper_label = new JLabel();
        paper_label.setText("Paper");
        paper_label.setIcon(paper_img); // Set icon
        paper_label.setHorizontalTextPosition(JLabel.CENTER);
        paper_label.setVerticalTextPosition(JLabel.BOTTOM);
        paper_label.setBounds(250, 300, 100, 100);

        // Scissor label
        JLabel scissor_label = new JLabel();
        scissor_label.setText("Scissor");
        scissor_label.setIcon(scissor_img); // Set icon
        scissor_label.setHorizontalTextPosition(JLabel.CENTER);
        scissor_label.setVerticalTextPosition(JLabel.BOTTOM);
        scissor_label.setBounds(350, 300, 100, 100);

        // Add mouse listener to labels (like buttons)
        rock_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                // Call the calculate method
                calculate(rock_label.getText());
            }
        });

        paper_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                calculate(paper_label.getText());
            }
        });

        scissor_label.addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                calculate(scissor_label.getText());
            }
        });

        // Add components in the frame (game window)
        add(rock_label);
        add(paper_label);
        add(scissor_label);
        add(computerMove);
        add(result);
        add(score);
        add(computerScore);
        add(playerScore);
        add(computer_label);
        add(versus);
        add(player_label);
        setLayout(null);
    }

    public void calculate(String player){
        String[] choice = {"Rock", "Paper", "Scissor"};
        int random_choice = (int)((Math.random()*10)%3);
        String computer = choice[random_choice];

        // Display computer move on frame
        computerMove.setText(computer);
        if(random_choice == 0){
            computerMove.setIcon(rock_img);
        }
        else if(random_choice == 1){
            computerMove.setIcon(paper_img);
        }
        else{
            computerMove.setIcon(scissor_img);
        }

        // Game logic
        String res = "";
        if(player.equals(computer)){
            res = "Draw";
        }
        else if(player.equals("Rock")){
            if(computer.equals("Paper")){
                res = "You Lose!";
                computer_score++;
            }
            else{
                res = "You Win!";
                player_score++;
            }
        }
        else if(player.equals("Paper")){
            if(computer.equals("Scissor")){
                res = "You Lose!";
                computer_score++;
            }
            else{
                res = "You Win!";
                player_score++;
            }
        }
        else{
            // Player is Scissor
            if(computer.equals("Rock")){
                res = "You Lose!";
                computer_score++;
            }
            else{
                res = "You Win!";
                player_score++;
            }
        } // End of game logic

        result.setText(res);
        playerScore.setText("Player wins: " + player_score);
        computerScore.setText("Computer wins: " + computer_score);
    }

    public static void main(String[] args){
        // Create frame (game window)
        Game game = new Game();
        game.setTitle("Rock Paper Scissor"); // Window title
        game.setBounds(200, 200, 600, 600); // x, y, width, height
        game.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        game.getContentPane().setBackground(Color.WHITE); // Background color
        game.setup(); // Call setup
        game.setResizable(false); // Not resizable
        game.setVisible(true);
    }
}