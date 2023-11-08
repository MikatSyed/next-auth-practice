export function html({ url, text }) {
  return ` <div style="max-width: 700px; margin: auto; border: 10px solid #ddd; padding: 50px 20px;font-size: 100% ">
    <h2 style="text-align: center; text-transform: capitalize; color: teal;">Welcome to the Next Auth Project</h2>
    <p>Congratulations! To Are almost set to start useing NextAuth Project.
        Just click the button below to validate your email address
    </p>

    <a href=${url} style="background: crimson; text-decoration: none; color:wheat; margin:10px 0; display: inline-block; padding: 20px;" >${text}</a>
</div>`;
}
